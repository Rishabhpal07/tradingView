'use client'
import FotterLink from '@/components/forms/FotterLink'
import InputField from '@/components/forms/inputField'
import { Button } from '@/components/ui/button'
import { Form, useForm } from 'react-hook-form'
function SignIn() {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors ,isSubmitting},
  }=useForm<SignInFormData>({
    defaultValues:{
      email:'',
      password:'',
    },
     mode:'onBlur'
  })
  const onSubmit = async (data:SignInFormData) => {
    try {
      console.log(data)
    } catch (e) {
      console.error(e);
    }
    }
  return (
    <>
   <h1 className='form-title'>Welcome back</h1>
   <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
   <InputField
     name="email"
     label='Email'
     placeholder='example@gmail.com'
     register={register}
     error={errors.email}
     validation={{required:'email is required',pattern: /^\w+@\w+\.\w+$/}}
     />
      <InputField
     name="password"
     label='Password'
     placeholder='enter password'
     type='password'
     register={register}
     error={errors.password}
     validation={{required:'password is required',minLength:8}}
     />
      <Button type='submit' disabled={isSubmitting} className='flex items-center justify-center py-5 w-full yellow-btn'>
      {isSubmitting?'signing In':'Sign in'}
     </Button>
     </form>
     <FotterLink text="don't have an account?" linkText='Sign up' href='/sign-up' />
     </>
  )
}
export default SignIn
