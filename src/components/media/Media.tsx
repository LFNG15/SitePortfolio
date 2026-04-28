import { isVideoSource } from '@/lib/media'

type MediaProps = {
  src: string
  alt?: string
  className?: string
  loading?: 'lazy' | 'eager'
  decoding?: 'sync' | 'async' | 'auto'
}

export function Media({ src, alt = '', className, loading = 'lazy', decoding = 'async' }: MediaProps) {
  if (isVideoSource(src)) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
        className={className}
      />
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={className}
    />
  )
}
