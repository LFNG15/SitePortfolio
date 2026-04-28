const ALLOWED_PROTOCOLS = new Set([
  'http:',
  'https:',
  'mailto:',
  'tel:',
])

const ALLOWED_PREFIXES = ['#', '/']

export function isSafeUrl(input: string | null | undefined): boolean {
  if (!input) return false
  const trimmed = input.trim()
  if (trimmed.length === 0) return false

  if (trimmed.startsWith('//')) return false

  if (ALLOWED_PREFIXES.some((p) => trimmed.startsWith(p))) {
    return !/^javascript:/i.test(trimmed) && !/^data:/i.test(trimmed)
  }

  try {
    const url = new URL(trimmed)
    return ALLOWED_PROTOCOLS.has(url.protocol.toLowerCase())
  } catch {
    return false
  }
}

export function sanitizeUrl(input: string | null | undefined, fallback = '#'): string {
  return isSafeUrl(input) ? (input as string).trim() : fallback
}
