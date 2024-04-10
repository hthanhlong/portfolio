import { motion } from 'framer-motion'
import { arrowIcon } from '../assets'

const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col gap-2"
    >
      <div className="flex flex-col">
        <label className="text-md text-gray-500">Name</label>
        <input
          name="customer_name"
          type="text"
          className="text-md h-[40px] border-0 border-b-[1px] bg-transparent text-white focus:outline-none max-sm:text-xs"
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-md text-gray-500">Email</label>
        <input
          name="customer_email"
          type="text"
          autoComplete="off"
          className="text-md h-[40px] border-0 border-b-[1px] bg-transparent text-white focus:outline-none max-sm:text-xs"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-md text-gray-500">Message</label>
        <input
          name="customer_message"
          type="text"
          autoComplete="off"
          className="text-md h-[40px] border-0 border-b-[1px] bg-transparent text-white focus:outline-none max-sm:text-xs"
        />
      </div>
      <button className="mt-4 h-[40px] overflow-hidden rounded-xl bg-pink-400 text-sm font-bold text-white transition-all hover:scale-105 lg:h-[60px]">
        <span className="text-md lg:text-lg">Send Message</span>{' '}
        <motion.img
          src={arrowIcon}
          className="inline-block h-6 w-6"
          animate={{
            y: [0, -2, 0]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        />
      </button>
    </motion.form>
  )
}

export default Form
