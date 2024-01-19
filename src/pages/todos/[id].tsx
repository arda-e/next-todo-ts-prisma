import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'
import { Todo } from '@prisma/client'
import {
  Error as ErrorComponent,
  Loading,
  NoData,
  TodoForm,
} from '@/components'
import { GetResponse } from '@/types/types'
import { Header } from '@/components/common/Header'

const EditTodoPage = () => {
  const router = useRouter()
  const { id } = router.query
  console.log('arda')
  const fetchTodo = async (url: string): Promise<GetResponse<Todo>> => {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Failed to fetch todo')
    }
    return res.json()
  }

  const { data, isLoading, error } = useSWR<GetResponse<Todo>>(
    id ? `/api/todos/${id}` : null,
    fetchTodo
  )

  const deleteTodo = async (id: number) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    })
    if (!res.ok) {
      throw new Error('Failed to delete todo')
    }
    router.push('/')
  }

  if (error) return <ErrorComponent />
  if (isLoading) return <Loading />
  if (!data) return <NoData />

  const handleDelete = async () => {
    if (!id) {
      console.error('No id found')
      return
    }

    await deleteTodo(parseInt(id as string))
  }

  return (
    <div>
      <Header text="Todo Details" isEdit onClickDelete={handleDelete} />
      <TodoForm todo={data.data} />
    </div>
  )
}

export default EditTodoPage
