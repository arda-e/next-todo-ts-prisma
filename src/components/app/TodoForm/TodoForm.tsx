import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createTodoDto } from '@/dto'
import { Button, Input } from '@/components'

const TodoForm = () => {
  const methods = useForm({ resolver: zodResolver(createTodoDto) })
  const { handleSubmit } = methods

  const isLoading = false

  const onSubmit = (data: unknown) => console.log(data)

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
          <Button text="Submit" type="submit" disabled={isLoading} />
        </form>
      </FormProvider>
    </>
  )
}

export default TodoForm
