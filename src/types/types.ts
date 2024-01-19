/**
 * Represents a response object that typically includes data, a message, and a success indicator.
 *
 * @template T - The type of data contained in the response.
 * @interface GetResponse
 */
export interface GetResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface SvgComponentProps {
  onClick?: () => void
  className?: string
}
