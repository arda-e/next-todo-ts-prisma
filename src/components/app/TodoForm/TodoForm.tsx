import React, { useEffect } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@/components'
import { createTodoDto } from '@/dto'
import { Todo } from '@prisma/client'
import { useCreateTodo, useUpdateTodo } from './hooks'
import { classNames } from '@/utils/helpers'
import { mutate } from 'swr'

type FormTodo = Omit<Todo, 'createdAt' | 'updatedAt'>

interface TodoFormProps {
  todo?: Todo
}

const TodoForm = (props: TodoFormProps) => {
  const methods = useForm<FormTodo>({ resolver: zodResolver(createTodoDto) })
  const { handleSubmit, formState } = methods

  const createUser = useCreateTodo()
  const updateUser = useUpdateTodo()

  const onSubmit: SubmitHandler<FormTodo> = async (data) => {
    if (data.id) {
      await updateUser(data.id, data)
    } else {
      await createUser(data)
      mutate('/api/todos')
    }
  }

  const registerTodo = (todo: Todo) => {
    if (!todo) return
    methods.setValue('name', todo.name)
    methods.setValue('description', todo.description)
    if (todo.id) methods.setValue('id', todo.id)
  }

  useEffect(() => {
    if (props.todo) registerTodo(props.todo)
  })

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classNames('flex flex-row gap-4 items-center')}
        >
          {/* <Heading isEditing={!!props.todo} /> */}
          <div className="flex gap-4">
            <Input
              label="Name"
              name="name"
              placeholder="Please enter a name."
            />
            <Input
              label="Description"
              name="description"
              placeholder="Please enter a description."
            />
          </div>
          <Button text="Submit" type="submit" disabled={formState.isLoading} />
        </form>
      </FormProvider>
    </>
  )
}

export default TodoForm
