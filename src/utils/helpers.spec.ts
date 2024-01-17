import { classNames } from './helpers'

describe('classNames', () => {
  it('returns an empty string when no arguments are passed', () => {
    expect(classNames()).toEqual('')
  })

  it('filters out falsy values and concatenates the rest with a space', () => {
    expect(classNames('foo', '', 'bar', null, undefined, 'baz')).toEqual(
      'foo bar baz'
    )
  })

  it('works with any type of argument', () => {
    expect(classNames('foo', 123, true, {}, [])).toEqual(
      'foo 123 true [object Object] '
    )
  })
})
