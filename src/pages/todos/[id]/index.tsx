import React from 'react'
// HOOKS
import { useRouter } from 'next/router'
import { useDeleteTodo, useGetTodo } from '@/hooks'
// COMPONENTS
import { Error as ErrorComponent, Loading, Header, NoData } from '@/components'

const EditTodoPage = () => {
  const router = useRouter()
  const { id } = router.query

  const { data, isLoading, error } = useGetTodo(id as string)
  const { deleteTodo } = useDeleteTodo()

  const handleDeleteTodoClick = async () => {
    if (!id) {
      console.error('No id found')
      return
    }
    await deleteTodo(parseInt(id as string))
  }

  const handleNavigateToEditClick = () => {
    if (!id) {
      console.error('No id found')
      return
    }
    router.push(`/todos/${id}/edit`)
  }

  if (error) return <ErrorComponent />
  if (isLoading) return <Loading />
  if (!data) return <NoData />

  return (
    <div>
      <Header
        text="Todo Details"
        type="detail"
        onClickDelete={handleDeleteTodoClick}
        onClickEdit={handleNavigateToEditClick}
      />
    </div>
  )
}

export default EditTodoPage
