import * as React from 'react'
import { SvgComponentProps } from '@/types/types'

const SvgComponent = (props: SvgComponentProps) => (
  <svg
    className="cursor-pointer transition duration-200 ease-in-out hover:scale-110"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#0e0c0c"
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M165.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128Z" />
  </svg>
)
export default SvgComponent
