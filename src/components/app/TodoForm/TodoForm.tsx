import React, { useEffect } from 'react'
// LIBS
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// HOOKS
import { useRouter } from 'next/router'
import { useCreateTodo, useUpdateTodo } from '@/hooks'
import { mutate } from 'swr'
// COMPONENTS
import { Button, Input } from '@/components'
// TYPES
import { createTodoDto, updateTodoDto } from '@/dto'
import { Todo } from '@prisma/client'
// UTILS
import { classNames } from '@/utils/helpers'

type FormTodo = Omit<Todo, 'createdAt' | 'updatedAt'>

interface TodoFormProps {
  todo?: Todo
}

const TodoForm = (props: TodoFormProps) => {
  const router = useRouter()
  const createTodo = useCreateTodo()
  const updateTodo = useUpdateTodo()

  const methods = useForm<FormTodo>({
    resolver: zodResolver(props.todo ? updateTodoDto : createTodoDto),
  })
  
  const { handleSubmit, formState } = methods

  const onSubmit: SubmitHandler<FormTodo> = async (data) => {
    // Determine whether to update or create a todo based on 'data.id'.
    const operation = data.id ? updateTodo(data.id, data) : createTodo(data)
    await operation
    // Redirect to the todo's detail page if it's an update, or refresh the todo list.
    data.id ? router.push(`/todos/${data.id}`) : mutate('/api/todos')
  }

  /*
  * @name registerTodo
  * @description If a todo exists register the values in react-hook-form if it's null return
  */
  const registerTodo = (todo: Todo) => {
    if (!todo) return
    methods.setValue('name', todo.name)
    methods.setValue('description', todo.description)
    if (todo.id) methods.setValue('id', todo.id) // TODO: Check if a conditional is required in this line
  }

  useEffect(() => {
    if (props.todo) registerTodo(props.todo)
  }, [props.todo])

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classNames(
            'flex flex-row gap-4 items-center',
            props.todo && 'justify-center'
          )}
        >
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
          <Button
            text="Submit"
            type="submit"
            disabled={formState.isSubmitting}
          />
        </form>
      </FormProvider>
    </>
  )
}

export default TodoForm
