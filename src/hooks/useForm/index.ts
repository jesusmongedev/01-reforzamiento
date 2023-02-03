import { useState } from 'react'

// export const useForm = <T extends Object>(formData: T) => {
//TODO research wihch generic type suits better in this case

export const useForm = <T extends Record<string, unknown>>(formData: T) => {
  const [formState, setFormState] = useState(formData)

  const handleFormDataChange = (value: string, field: keyof T) => {
    setFormState({
      ...formState,
      [field]: value,
    })
  }

  return {
    ...formState,
    formState,
    handleFormDataChange,
  }
}
