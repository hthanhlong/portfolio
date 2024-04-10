import GetInTouch from './GetInTouch'
import Wrapper from './Wrapper'
import { motion } from 'framer-motion'

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Wrapper id="contact">
      <div className="container relative grid place-content-center pb-20 max-sm:px-8">
        <GetInTouch />

        <div className="mt-10">
          <motion.div
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
          >
            <div className="max-sm:flex max-sm:gap-4">
              <div className="max-sm:text-md min-w-[80px] text-gray-500">
                Phone:
              </div>
              <div className="max-sm:text-md text-white">+1 (604)-621-7979</div>
            </div>
            <div className="max-sm:flex max-sm:gap-4">
              <div className="max-sm:text-md min-w-[80px] text-gray-500">
                Email:
              </div>
              <div className="max-sm:text-md text-white">
                hthanhlong97@gmail.com
              </div>
            </div>
            <div className="max-sm:flex max-sm:gap-4">
              <div className="max-sm:text-md min-w-[80px] text-gray-500">
                Address:
              </div>
              <div className="max-sm:text-md text-white">
                Vancouver, BC, Canada
              </div>
            </div>
          </motion.div>
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
            <button className="mt-4 rounded-xl bg-pink-400 text-sm font-bold text-white transition-all hover:scale-105 max-sm:h-[40px]">
              Send Message{' '}
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5rem"
                width="1.5rem"
                className="inline-block"
              >
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
              </svg>
            </button>
          </motion.form>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white max-sm:pb-4 sm:pb-16">
          <p className="text-sm">Created by Long Hoang</p>
          <div className="flex gap-2">
            <div className="text-sm">LinkedIn</div>
            <div className="text-sm">Github</div>
            <div className="text-sm">Skype</div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact
