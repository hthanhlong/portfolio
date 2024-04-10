import { githubIcon, gmailIcon, linkedinIcon, skypeIcon } from '../assets'
import Form from './Form'
import GetInTouch from './GetInTouch'
import Wrapper from './Wrapper'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <Wrapper id="contact">
      <div className="container relative grid place-content-center max-sm:px-8 lg:pb-20">
        <GetInTouch />
        <Form />
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
                <a href="https://github.com/hthanhlong" target="_blank">
                  <img
                    src={githubIcon}
                    className="inline-block h-6 w-6 transition-all hover:scale-125"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/long-hoang-james-7a87031b8"
                  target="_blank"
                >
                  <img
                    src={linkedinIcon}
                    className="inline-block h-6 w-6 transition-all hover:scale-125"
                  />
                </a>
                <a href="skype:hthanhlong97?chat" target="_blank">
                  <img
                    src={skypeIcon}
                    className="inline-block h-6 w-6 transition-all hover:scale-125"
                  />
                </a>
                <a href="mailto: hthanhlong97@gmail.com" target="_blank">
                  <img
                    src={gmailIcon}
                    className="inline-block h-6 w-6 transition-all hover:scale-125"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Wrapper>
  )
}

export default Contact
