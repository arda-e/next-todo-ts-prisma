import React from 'react'
// HOOKS
import { useRouter } from 'next/router'
import { useGetTodo } from '@/hooks'
// COMPONENTS
import {
  Header,
  NoData,
  TodoForm,
  Error as ErrorComponent,
  Loading,
  TodoFormContainer,
} from '@/components'

const EditTodo = () => {
  const router = useRouter()
  const { id } = router.query

  const { data, isLoading, error } = useGetTodo(id as string)

  if (error) return <ErrorComponent />
  if (isLoading) return <Loading />
  if (!data) return <NoData />

  return (
    <>
      <Header text="Edit Todo" type="edit" />
      <TodoFormContainer text="Edit Todo">
        <TodoForm todo={data.data} />
      </TodoFormContainer>
    </>
  )
}

export default EditTodo
