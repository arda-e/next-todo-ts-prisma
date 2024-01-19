import React from 'react'

import { useRouter } from 'next/router'
import { Home, Edit, Delete, CaretLeft } from './assets'
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

  return (
    <>
      <div
        id="header"
        className="flex w-full items-center justify-between border-b-2 bg-white border-gray-200 shadow-sm p-4 px-8 h-16"
      >
        <div id="header__logo-text" className="flex gap-4 items-center">
          {props.type !== 'home' ? (
            <>
              <Home onClick={handleHomeClick} />
              <CaretLeft onClick={handleNavigateBack} />
            </>
          ) : null}
          <h2 className="text-2xl font-semibold">{props.text}</h2>
        </div>

        {props.type === 'detail' ? (
          <>
            <div id="header__edit" className="flex items-center gap-4">
              <Edit onClick={props.onClickEdit} />
              <Delete onClick={props.onClickDelete} />
            </div>
          </>
        ) : null}
      </div>
    </>
  )
}

export default Header
