import GetInTouch from './GetInTouch'
import Wrapper from './Wrapper'
import { motion } from 'framer-motion'

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Wrapper id="contact">
      <div className="container grid h-full place-items-center">
        <GetInTouch />
        <div className="flex h-full w-full justify-between gap-4 py-20">
          <div className="contact-left w-1/2">
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
              className="flex h-full flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-2">
                <label className="text-xl text-gray-500">Name</label>
                <input
                  name="customer_name"
                  type="text"
                  className="h-[40px] w-full border-0 border-b-[1px] bg-transparent text-xl text-white focus:outline-none"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xl text-gray-500">Email</label>
                <input
                  name="customer_email"
                  type="text"
                  autoComplete="off"
                  className="h-[40px] w-full border-0 border-b-[1px] bg-transparent text-xl  text-white focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xl text-gray-500">Message</label>
                <input
                  name="customer_message"
                  type="text"
                  autoComplete="off"
                  className="h-[40px] w-full border-0 border-b-[1px] bg-transparent text-xl text-white focus:outline-none"
                />
              </div>
              <button className="h-[60px] w-full rounded-xl bg-pink-400 text-xl font-bold text-white transition-all hover:scale-105">
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
            className="contact-right flex h-full w-1/2 flex-col justify-between pl-40 text-white"
          >
            <div>
              <div className="text-xl text-gray-500">Phone</div>
              <div className="text-lg">+1 (604)-621-7979</div>
            </div>
            <div>
              <div className="text-xl text-gray-500">Email</div>
              <div className="text-lg">hthanhlong97@gmail.com</div>
            </div>
            <div>
              <div className="text-xl text-gray-500">Address</div>
              <div className="text-lg">Vancouver, BC, Canada</div>
            </div>
            <div>
              <div className="text-xl text-gray-500">Socials</div>
              <div className="flex gap-2">
                <div className="text-lg">LinkedIn</div>
                <div className="text-lg">Github</div>
                <div className="text-lg">Skype</div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-end text-white">
          <motion.div
            initial={{
              y: -100,
              opacity: 0
            }}
            whileInView={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 1
            }}
            className="flex h-20 w-full items-center justify-center  text-xl text-white"
          >
            <span>@ Created by Long Hoang</span>
          </motion.div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact
