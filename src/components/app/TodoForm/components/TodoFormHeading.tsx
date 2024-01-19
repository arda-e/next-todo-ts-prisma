import React from 'react'

interface TodoFormHeadingProps {
  isEditing: boolean
}

const TodoFormHeading = (props: TodoFormHeadingProps) => {
  if (props.isEditing) {
    return <h1 className="font-semibold text-2xl">Edit Todo</h1>
  }
  return <h1 className="font-semibold text-2xl">Add Todo</h1>
}

export default TodoFormHeading
