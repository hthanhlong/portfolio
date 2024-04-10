import { githubIcon, gmailIcon, linkedinIcon, skypeIcon } from '../assets'
import GetInTouch from './GetInTouch'
import Wrapper from './Wrapper'
import { motion } from 'framer-motion'

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Wrapper id="contact">
      <div className="container relative grid place-content-center max-sm:px-8 lg:pb-20">
        <GetInTouch />
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
          <button className="mt-4 h-[40px] rounded-xl bg-pink-400 text-sm font-bold text-white transition-all hover:scale-105">
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
          className="mt-10 flex flex-col lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="group-1">
            <div className="mb-4 max-sm:flex max-sm:gap-4">
              <div className="max-sm:text-md min-w-[80px] text-lg text-gray-500">
                Phone:
              </div>
              <div className="max-sm:text-md text-lg text-white">
                +1 (604)-621-7979
              </div>
            </div>
            <div className="mb-4 max-sm:flex max-sm:gap-4">
              <div className="max-sm:text-md min-w-[80px] text-lg text-gray-500">
                Email:
              </div>
              <div className="max-sm:text-md text-lg text-white">
                hthanhlong97@gmail.com
              </div>
            </div>
          </div>
          <div className="group-2">
            <div className="mb-4 max-sm:flex max-sm:gap-4">
              <div className="max-sm:text-md min-w-[80px] text-lg text-gray-500">
                Address:
              </div>
              <div className="max-sm:text-md text-lg text-white">
                Vancouver, BC, Canada
              </div>
            </div>
            <div className="mb-4 max-sm:flex max-sm:gap-4">
              <div className="max-sm:text-md min-w-[80px] text-lg text-gray-500">
                Socials:
              </div>
              <div className="max-sm:text-md flex gap-2 text-white">
                <span>
                  <img src={githubIcon} className="inline-block h-6 w-6" />
                </span>
                <span>
                  <img src={linkedinIcon} className="inline-block h-6 w-6" />
                </span>
                <span>
                  <img src={skypeIcon} className="inline-block h-6 w-6" />
                </span>
                <span>
                  <img src={gmailIcon} className="inline-block h-6 w-6" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Wrapper>
  )
}

export default Contact
