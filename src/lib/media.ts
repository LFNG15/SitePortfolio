const VIDEO_EXTENSIONS = ['.webm', '.mp4', '.mov', '.ogv'] as const

const PLACEHOLDER_VALUES = new Set(['', '/'])

export function hasMedia(src: string | null | undefined): src is string {
  if (!src) return false
  return !PLACEHOLDER_VALUES.has(src.trim())
}

export function isVideoSource(src: string | null | undefined): boolean {
  if (!hasMedia(src)) return false
  const lower = src.toLowerCase()
  return VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext))
}

export function isImageSource(src: string | null | undefined): boolean {
  return hasMedia(src) && !isVideoSource(src)
}
