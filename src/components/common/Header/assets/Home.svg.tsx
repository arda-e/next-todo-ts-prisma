import * as React from 'react'
import { SvgComponentProps } from '@/types/types'

const Home = (props: SvgComponentProps) => (
  <svg
    className="cursor-pointer transition duration-200 ease-in-out hover:scale-110"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#0e0c0c"
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M216 115.54V208a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-48a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v48a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-92.46a8 8 0 0 1 2.62-5.92l80-75.54a8 8 0 0 1 10.77 0l80 75.54a8 8 0 0 1 2.61 5.92Z"
      opacity={0.2}
    />
    <path d="m218.83 103.77-80-75.48a1.14 1.14 0 0 1-.11-.11 16 16 0 0 0-21.53 0l-.11.11-79.91 75.48A16 16 0 0 0 32 115.55V208a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48h32v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-92.45a16 16 0 0 0-5.17-11.78ZM208 208h-48v-48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v48H48v-92.45l.11-.1L128 40l79.9 75.43.11.1Z" />
  </svg>
)
export default Home
