export interface GetResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface SvgComponentProps {
  onClick?: () => void
  className?: string
}
