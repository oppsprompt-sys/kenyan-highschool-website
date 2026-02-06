import React, { useMemo } from 'react'
import { useContent } from '../engine/ContentEngine'

function Item({ it, onAcknowledge }) {
  return (
    <article className="feed__item">
      <div className="feed__title">{it.title}</div>
      <div className="feed__meta">{it.type} • {it.audience.join(', ')} • {it.priority}</div>
      <div style={{marginTop:8}}>{it.body}</div>
      <div style={{marginTop:10}}>
        <button className="btn ghost" onClick={() => onAcknowledge(it.id)}>Mark seen</button>
      </div>
    </article>
  )
}

export default function ContentFeed({ searchQuery = '' }) {
  const { feed, acknowledge } = useContent()

  const filteredFeed = useMemo(() => {
    if (!feed) return []
    if (!searchQuery.trim()) return feed

    const query = searchQuery.toLowerCase()
    return feed.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.body.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query) ||
      item.audience.some(a => a.toLowerCase().includes(query))
    )
  }, [feed, searchQuery])

  if (!feed || feed.length === 0) return <p>No active items.</p>
  if (filteredFeed.length === 0) return <p>No items match your search. Try a different query.</p>

  return (
    <section style={{ marginTop: 16 }}>
      {filteredFeed.map((it) => (
        <Item key={it.id} it={it} onAcknowledge={acknowledge} />
      ))}
    </section>
  )
}
