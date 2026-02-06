import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import sampleData from './sampleData'
import { isActive, priorityScore } from './contentModel'
import { detectIntent, persistIntent } from './IntentDetector'

const ContentContext = createContext(null)

export function useContent() {
  return useContext(ContentContext)
}

export function ContentProvider({ children }) {
  const [now] = useState(() => new Date())
  const [intent, setIntent] = useState(() => detectIntent())
  const [acknowledged, setAcknowledged] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('ack_ctas') || '[]')
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    persistIntent(intent)
  }, [intent])

  useEffect(() => {
    try {
      localStorage.setItem('ack_ctas', JSON.stringify(acknowledged))
    } catch (e) {
      // ignore
    }
  }, [acknowledged])

  const activeItems = useMemo(() => {
    return sampleData.filter((it) => isActive(it, now))
  }, [now])

  const scored = useMemo(() => {
    // score by priority, audience match, and whether acknowledged
    return activeItems
      .map((it) => {
        const base = priorityScore(it)
        const audienceMatch = it.audience.includes(intent) ? 20 : it.audience.includes('public') ? 5 : 0
        const viewedPenalty = acknowledged.includes(it.id) ? -50 : 0
        return { item: it, score: base + audienceMatch + viewedPenalty }
      })
      .sort((a, b) => b.score - a.score)
  }, [activeItems, intent, acknowledged])

  const hero = scored.length ? scored[0].item : null

  function acknowledge(id) {
    if (!acknowledged.includes(id)) setAcknowledged((s) => [...s, id])
  }

  function setUserIntent(i) {
    setIntent(i)
    persistIntent(i)
  }

  return (
    <ContentContext.Provider value={{ feed: scored.map((s) => s.item), hero, acknowledge, intent, setUserIntent }}>
      {children}
    </ContentContext.Provider>
  )
}
