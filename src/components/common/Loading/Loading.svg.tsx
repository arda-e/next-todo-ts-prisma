import { SvgComponentProps } from '@/types/types'
import * as React from 'react'

function SvgComponent(props: SvgComponentProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M236 128a108 108 0 01-216 0c0-42.52 24.73-81.34 63-98.9a12 12 0 1110 21.81C63.24 64.57 44 94.83 44 128a84 84 0 00168 0c0-33.17-19.24-63.43-49-77.09a12 12 0 1110-21.81c38.27 17.56 63 56.38 63 98.9z" />
    </svg>
  )
}

export default SvgComponent
