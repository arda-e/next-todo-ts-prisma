import { Todo } from '@prisma/client'
import React from 'react'
import Attribute from './Attribute'

interface TodoDetailsProps {
  todo: Todo
}
const TodoDetails = (props: TodoDetailsProps) => {
  const createdAtDate = new Date(props.todo.createdAt)
  const updatedAtDate = new Date(props.todo.updatedAt)
  return (
    <>
      <div className="flex flex-row justify-center gap-4 border-b-2 border-gray-200 bg-white px-8 py-4">
        <Attribute name="Name" value={props.todo.name} />
        <Attribute name="Description" value={props.todo.description} />
        <Attribute name="Create Time" value={createdAtDate.toDateString()} />
        <Attribute name="Update Time" value={updatedAtDate.toDateString()} />
      </div>
    </>
  )
}

export default TodoDetails
