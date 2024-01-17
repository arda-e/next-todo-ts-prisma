import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@/components'
import { createTodoDto } from '@/dto'
import { Todo } from '@prisma/client'
import useCreateTodo from './useCreateTodo'

type createTodo = Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>

const TodoForm = () => {
  const methods = useForm<createTodo>({ resolver: zodResolver(createTodoDto) })
  const { handleSubmit, formState } = methods

  const createUser = useCreateTodo()

  const onSubmit: SubmitHandler<
    Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>
  > = async (data) => {
    await createUser(data)
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Name" name="name" placeholder="Please enter a name." />
          <Input
            label="Description"
            name="description"
            placeholder="Please enter a description."
          />
          <Button text="Submit" type="submit" disabled={formState.isLoading} />
        </form>
      </FormProvider>
    </>
  )
}

export default TodoForm
