import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { arrowIcon, loading } from '../assets'

const Form = () => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useRef<HTMLFormElement>(null)

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const onSubmit = () => {
    setIsLoading(false)
    if (form.current) {
      setIsLoading(true)
      emailjs
        .sendForm(
          'service_21egw5u',
          'template_sx4m3wj',
          form.current,
          'g_iCl8DkGWYCqWTiv'
        )
        .then(
          () => {
            toast.success('Your message has been sent successfully')
            console.log('SUCCESS!')
          },
          (error) => {
            toast.error('Something went wrong')
            console.log('FAILED...', error.text)
          }
        )
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  return (
    <motion.form
      initial={{
        opacity: 0,
        scale: 0.5
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1
      }}
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="mt-10 flex flex-col gap-2"
    >
      <div className="flex flex-col">
        <label
          className={`text-md text-gray-500 ${errors.from_name?.type ? 'text-red-500' : ''}`}
        >
          Name
        </label>
        <input
          {...register('from_name', { required: true })}
          name="from_name"
          type="text"
          className={`text-md h-[40px] border-0 border-b-[1px] bg-transparent text-white focus:outline-none max-sm:text-xs ${
            errors.from_name?.type ? 'border-red-500' : ''
          }`}
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col">
        <label
          className={`text-md text-gray-500 ${errors.from_email?.type ? 'text-red-500' : ''}`}
        >
          Email
        </label>
        <input
          {...register('from_email', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          })}
          type="text"
          autoComplete="off"
          className={`text-md h-[40px] border-0 border-b-[1px] bg-transparent text-white focus:outline-none max-sm:text-xs ${
            errors.from_email?.type ? 'border-red-500' : ''
          }`}
        />
      </div>
      <div className="flex flex-col">
        <label
          className={`text-md text-gray-500 ${errors.message?.type ? 'text-red-500' : ''}`}
        >
          Message
        </label>
        <input
          {...register('message', { required: true, maxLength: 500 })}
          type="text"
          autoComplete="off"
          className={`text-md h-[40px] border-0 border-b-[1px] bg-transparent text-white focus:outline-none max-sm:text-xs ${
            errors.message?.type ? 'border-red-500' : ''
          }`}
        />
      </div>
      <button
        type="submit"
        className="mt-4 flex h-[40px] items-center justify-center overflow-hidden rounded-xl bg-pink-400 text-sm font-bold text-white transition-all hover:scale-105 lg:h-[60px]"
      >
        <span className="text-md lg:text-lg">Send Message</span>{' '}
        {isLoading ? (
          <motion.img
            src={loading}
            className="inline-block h-8 w-8"
            animate={{
              rotate: [360, 0, -360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop'
            }}
          />
        ) : (
          <img src={arrowIcon} className="inline-block h-8 w-8" />
        )}
      </button>
    </motion.form>
  )
}

export default Form
