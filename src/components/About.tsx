import Wrapper from './Wrapper'
import myPicture from '../assets/imgs/my-picture.jpeg'
import AboutMe from './AboutMe'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <Wrapper id="about relative">
      <div className="container grid h-full place-items-center">
        <div>
          <div className="grid h-1/4 place-items-center">
            <AboutMe />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-auto flex h-full items-center gap-4 rounded-lg bg-black bg-opacity-20 p-4"
          >
            <div className="about-bottom-left mx-auto">
              <img
                src={myPicture}
                alt="my-picture"
                className="max-w-[20rem] rounded object-cover"
              />
            </div>
            <div className="about-bottom-right text-gray-300">
              <div className="content text-xl leading-7">
                <div>I'm Long</div> a front-end developer passionate about
                crafting user-friendly web applications. With over four years of
                professional experience, I've honed my skills in various
                technologies that empower me to build dynamic and responsive web
                solutions.
                <div className="mt-4">
                  My primary focus lies in leveraging the power of ReactJS to
                  create interactive and scalable user interfaces. These
                  technologies enable me to develop applications that look great
                  and provide a seamless and efficient user experience. In
                  addition to my expertise in ReactJS, I'm well-versed in
                  crafting efficient user interfaces using Tailwind CSS. This
                  allows me to create visually appealing web designs with a
                  strong emphasis on performance and user accessibility.
                </div>
                <div className="mt-4">
                  I also have a soft backend foundation with Node.js and
                  Express.js, enabling me to build full-stack applications
                  quickly and easily. Whether handling server-side logic or
                  designing API endpoints, I have the expertise to ensure your
                  application runs smoothly from end to end. I'm enthusiastic
                  about staying up-to-date with the latest web development
                  trends and best practices, providing I'm always at the
                  forefront of the rapidly evolving tech landscape.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Wrapper>
  )
}

export default About
