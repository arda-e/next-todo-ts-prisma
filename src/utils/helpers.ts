/**
 * @name classNames
 * @description Generates a space-separated string of CSS class names based on the provided arguments.
 *
 * @param {...unknown} classes - The CSS class names and expressions to be included.
 * @returns {string} - A space-separated string of CSS class names.
 * @example
 * // Usage:
 * const classes = classNames('text-red', { 'font-bold': isBold }, 'bg-blue', false && 'hidden');
 * // Result: "text-red font-bold bg-blue"
 */
export const classNames = (...classes: unknown[]): string =>
  classes.filter(Boolean).join(' ')
