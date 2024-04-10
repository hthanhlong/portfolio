import Wrapper from './Wrapper'
import myPicture from '../assets/imgs/my-picture.jpeg'
import AboutMe from './AboutMe'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <Wrapper id="about">
      <div className="container grid place-content-center p-4">
        <div className="grid place-content-center">
          <AboutMe />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-2 rounded-lg bg-black bg-opacity-20 p-2 lg:flex-row lg:gap-4"
        >
          <div className="">
            <img
              src={myPicture}
              alt="my-picture"
              className="max-h-[300px] max-w-[300px] rounded-xl object-contain max-sm:min-h-[200px] max-sm:max-w-[200px] lg:max-h-[400px] lg:max-w-[400px]"
            />
          </div>
          <div className="about-bottom-right text-gray-100">
            <div className="content text-md leading-7 lg:text-xl">
              I'm Long, a front-end developer passionate about crafting
              user-friendly web applications. With over three years of
              professional experience, I've honed my skills in various
              technologies that empower me to build dynamic and responsive web
              solutions.
              <div className="mt-4 max-sm:hidden">
                My primary focus lies in leveraging the power of ReactJS to
                create interactive and scalable user interfaces. These
                technologies enable me to develop applications that look great
                and provide a seamless and efficient user experience. In
                addition to my expertise in ReactJS, I'm well-versed in crafting
                efficient user interfaces using Tailwind CSS. This allows me to
                create visually appealing web designs with a strong emphasis on
                performance and user accessibility.
              </div>
              <div className="mt-4 max-sm:hidden">
                I also have a soft backend foundation with Node.js and
                Express.js, enabling me to build full-stack applications quickly
                and easily. Whether handling server-side logic or designing API
                endpoints, I have the expertise to ensure your application runs
                smoothly from end to end. I'm enthusiastic about staying
                up-to-date with the latest web development trends and best
                practices, providing I'm always at the forefront of the rapidly
                evolving tech landscape.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Wrapper>
  )
}

export default About
