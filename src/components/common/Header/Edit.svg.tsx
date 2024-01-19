import * as React from 'react'

interface SvgComponentProps {
  onClick?: () => void
}

const SvgComponent = (props: SvgComponentProps) => (
  <svg
    className="cursor-pointer transition duration-200 ease-in-out hover:scale-110"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      d="m192 120-56-56 29.66-29.66a8 8 0 0 1 11.31 0L221.66 79a8 8 0 0 1 0 11.31Z"
      opacity={0.2}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="m160 192 40-40-8-32M92.69 216H48a8 8 0 0 1-8-8v-44.69a8 8 0 0 1 2.34-5.65L165.66 34.34a8 8 0 0 1 11.31 0L221.66 79a8 8 0 0 1 0 11.31L98.34 213.66a8 8 0 0 1-5.65 2.34ZM136 64l56 56M40.51 160.51l54.98 54.98"
    />
  </svg>
)
export default SvgComponent
