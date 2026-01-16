'use client'
import CountrySelector from '@/components/forms/check'
import CountryInput from '@/components/forms/CountryInput'
import InputField from '@/components/forms/inputField'
import SelectField from '@/components/forms/SelectField'
import { Button } from '@/components/ui/button'
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants'
import { useMemo, useState } from 'react'
import { Form, useForm } from 'react-hook-form'
import countryList from 'react-select-country-list'


function SignUp() {
  const [value, setValue] = useState('')
  const CountryOptions = useMemo(() => countryList().getData(), [])

  const {
    register,
    handleSubmit,
    control,
    formState: { errors ,isSubmitting},
  } = useForm<SignUpFormData>({
    defaultValues:{
      fullName:"",
      email:'',
      password:'',
      country:'india',
      investmentGoals:'Growth',
      riskTolerance:'medium',
      preferredIndustry:'technology' 
    },
    mode:'onBlur'
  })
  const onSubmit = async (data:SignUpFormData) => {
  try {
    console.log(data)
  } catch (e) {
    console.error(e);
  }
  }
  return (
   <>
   <h1 className='form-title'>Sign Up & Personalize</h1>
   <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
     <InputField
     name="fullName"
     label='Full Name'
     placeholder='rishabh'
     register={register}
     error={errors.fullName}
     validation={{required:'full name is required',minLength:2}}
     />
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

     <CountryInput
      name='country'
      label='Country'
      control={control}
      error={errors.country}
      required
     />
     <SelectField
      name='investmentGoals'
      label='Investment Goals'
      placeholder='select your investment Goals'
      options={INVESTMENT_GOALS}
      control={control}
      error={errors.investmentGoals}
      required
     />
     <SelectField
      name='riskTolerance'
      label='Risk Tolerance'
      placeholder='select your risk level'
      options={RISK_TOLERANCE_OPTIONS}
      control={control}
      error={errors.riskTolerance}
      required
     />
     <SelectField
      name='preferedIndustry'
      label='Preferend Industry'
      placeholder='select your preffered industry'
      options={PREFERRED_INDUSTRIES}
      control={control}
      error={errors.preferredIndustry}
      required
     />
    <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
      {isSubmitting?'creating account':'start you investment journey'}
    </Button>
   </form>
   </>
  )
}

export default SignUp
