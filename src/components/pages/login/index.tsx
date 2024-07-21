'use client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { createUserLoginApi } from 'src/api/login/services'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const { mutate: createLogin } = useMutation(createUserLoginApi, {
    onSuccess(response) {
      reset()
      alert(response)
    }
  })

  const handlerSubmit = data => createLogin(data)

  return (
    <form
      className="flex h-[80vh] items-center justify-center"
      onSubmit={handleSubmit(handlerSubmit)}
    >
      <div className="border border-red-50 p-4 h-fit rounded-md flex flex-col gap-4">
        <input
          {...register('username', { required: true })}
          placeholder="UserName"
          className="bg-gray-50 rounded-md p-1 border-b-red-100 border-b-2"
        />
        {errors.username && <p className="text-red-500 text-xs">*UserName is required.</p>}
        <input
          {...register('password', { required: true })}
          placeholder="Password"
          className="bg-gray-50 rounded-md p-1 border-b-red-100 border-b-2"
        />
        {errors.password && <p className="text-red-500 text-xs">*Password is required.</p>}
        <button type="submit" className="bg-red-500 text-white rounded-md p-2">
          LogIn
        </button>
        <div className="text-sm text-gray-700">
          {"Don't you have an account? Click"}
          <Link className="text-blue-500 underline" href={'./signup'}>
            SignUp
          </Link>
        </div>
      </div>
    </form>
  )
}

export default LoginPage
