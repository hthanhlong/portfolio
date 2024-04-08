import Wrapper from './Wrapper'
import { benefits } from '../constant'
import Project from './Project'

const Experience = () => {
  return (
    <Wrapper id="experience">
      <div className="container grid h-full place-content-center text-white">
        <div className="projects">
          <h1 className="mb-3 text-5xl font-bold">Experience</h1>
          <div className="flex gap-2">
            {benefits.map((item) => (
              <Project key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="projects">
          <h1 className="mb-3 w-full text-right text-5xl font-bold">
            Portfolio
          </h1>
          <div className="flex gap-2">
            {benefits.map((item) => (
              <Project key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Experience
