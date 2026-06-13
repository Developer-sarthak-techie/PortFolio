'use client'

import { useState } from 'react'
import Image from 'next/image'

interface AvatarProps {
  src: string
  alt: string
  size?: number
  className?: string
}

const DICEBEAR_URL = 'https://api.dicebear.com/7.x/initials/svg?seed=Sarthak&backgroundColor=0ea5e9&textColor=ffffff&fontSize=48'

export function Avatar({ src, alt, size = 400, className = '' }: AvatarProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [useFallback, setUseFallback] = useState(false)

  const handleError = () => {
    if (!useFallback) {
      setImgSrc(DICEBEAR_URL)
      setUseFallback(true)
    }
  }

  return (
    <div className={`relative overflow-hidden rounded-full ${className}`}>
      <Image
        src={imgSrc}
        alt={alt}
        width={size}
        height={size}
        priority
        unoptimized={imgSrc.startsWith('http')}
        className="w-full h-full object-cover"
        onError={handleError}
      />
    </div>
  )
}
