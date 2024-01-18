import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@/components'
import { createTodoDto } from '@/dto'
import { Todo } from '@prisma/client'
import { useCreateTodo } from './hooks'
import { classNames } from '@/utils/helpers'
import { useRouter } from 'next/router'

type createTodo = Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>

const TodoForm = () => {
  const methods = useForm<createTodo>({ resolver: zodResolver(createTodoDto) })
  const { handleSubmit, formState } = methods
  const router = useRouter()
  const createUser = useCreateTodo()

  const onSubmit: SubmitHandler<
    Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>
  > = async (data) => {
    await createUser(data)
    if (formState.isSubmitSuccessful) {
      methods.reset()
    }
  }

  if (formState.isSubmitSuccessful) {
    router.push('/')
    return <h1>Success Redirecting to homepage...</h1>
  }

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classNames(
            'flex flex-col gap-2 rounded-md p-8',
            'border border-gray-200 bg-white shadow-md'
          )}
        >
          <h1 className="font-semibold text-2xl">Add Todo</h1>
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
