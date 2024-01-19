import React from 'react'
import DeleteIcon from './Delete.svg'
import EditIcon from './Edit.svg'

interface HeaderProps {
  text: string
  isEdit?: boolean
  onClickDelete?: () => void
  onClickEdit?: () => void
}

const Header = (props: HeaderProps) => {
  return (
    <>
      <div
        id="header"
        className="flex w-full items-center justify-between border-b-2 bg-white border-gray-200 shadow-sm p-4 px-8 h-16"
      >
        <h2 className="text-2xl font-semibold">{props.text}</h2>
        {props.isEdit ? (
          <>
            <div id="header__edit" className="flex items-center gap-4">
              <EditIcon onClick={props.onClickEdit} />
              <DeleteIcon onClick={props.onClickDelete} />
            </div>
          </>
        ) : null}
      </div>
    </>
  )
}

export default Header
