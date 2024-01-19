import React from 'react'

import { useRouter } from 'next/router'
import { Home, Edit, Delete, CaretLeft } from './assets'
import { classNames } from '@/utils/helpers'
interface HeaderProps {
  text: string
  type: 'edit' | 'home' | 'detail'
  onClickDelete?: () => void
  onClickEdit?: () => void
}
const Header = (props: HeaderProps) => {
  const router = useRouter()

  const handleHomeClick = () => {
    router.push('/')
  }
  const handleNavigateBack = () => {
    router.back()
  }

  const isDetailType = props.type === 'detail'
  const isHomeType = props.type === 'home'
  const isEditType = props.type === 'edit'

  return (
    <>
      <div
        id="header"
        className="flex w-full items-center justify-between border-b-2 bg-white border-gray-200 shadow-sm p-4 px-8 h-16"
      >
        {isHomeType ? null : (
          <div
            id="header__logo-text"
            className={classNames(
              'flex gap-4 items-center',
              isEditType && 'flex-1'
            )}
          >
            <Home onClick={handleHomeClick} />
            <CaretLeft onClick={handleNavigateBack} />
          </div>
        )}

        <h2
          className={classNames(
            'text-2xl font-semibold flex-1 text-gray-800',
            !isHomeType && 'text-center'
          )}
        >
          {props.text}
        </h2>

        {isDetailType ? (
          <div id="header__edit" className="flex items-end gap-4">
            <Edit onClick={props.onClickEdit} />
            <Delete onClick={props.onClickDelete} />
          </div>
        ) : (
          <div className="flex-1 justify-end"></div> // Placeholder for balance when type is not 'detail'
        )}
      </div>
    </>
  )
}

export default Header
