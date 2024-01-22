import React from 'react'

interface TodoFormHeadingProps {
  isEditing: boolean
}

const TodoFormHeading = (props: TodoFormHeadingProps) => {
  if (props.isEditing) {
    return <h1 className="text-2xl font-semibold">Edit Todo</h1>
  }
  return <h1 className="text-2xl font-semibold">Add Todo</h1>
}

export default TodoFormHeading
