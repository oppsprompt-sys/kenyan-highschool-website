// Lightweight intent detector using URL heuristics and localStorage hints
export function detectIntentFromPath(pathname = window.location.pathname) {
  const p = pathname.toLowerCase()
  if (p.includes('admissions') || p.includes('fees') || p.includes('apply')) return 'parent'
  if (p.includes('students') || p.includes('events') || p.includes('academics')) return 'student'
  if (p.includes('staff') || p.includes('intranet') || p.includes('admin')) return 'staff'
  return 'public'
}

export function getPersistedIntent() {
  try {
    return localStorage.getItem('site_intent')
  } catch (e) {
    return null
  }
}

export function persistIntent(intent) {
  try {
    localStorage.setItem('site_intent', intent)
  } catch (e) {
    // ignore
  }
}

export function detectIntent() {
  const persisted = getPersistedIntent()
  if (persisted) return persisted
  const inferred = detectIntentFromPath()
  persistIntent(inferred)
  return inferred
}
