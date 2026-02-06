export const PRIORITY_SCORES = {
  critical: 100,
  high: 60,
  normal: 30,
  low: 10,
}

export function parseDate(s) {
  if (!s) return null
  const d = new Date(s)
  return isNaN(d) ? null : d
}

export function isActive(item, now = new Date()) {
  if (!item) return false
  if (item.status !== 'active') return false
  const from = parseDate(item.validFrom)
  const to = parseDate(item.validTo)
  if (from && now < from) return false
  if (to && now > to) return false
  return true
}

export function priorityScore(item) {
  const base = PRIORITY_SCORES[item.priority] ?? PRIORITY_SCORES.normal
  const created = parseDate(item.createdAt)
  let recency = 0
  if (created) {
    const days = (new Date() - created) / (1000 * 60 * 60 * 24)
    recency = Math.max(0, 14 - days)
  }
  return base + Math.round(recency)
}
