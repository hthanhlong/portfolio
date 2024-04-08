import Wrapper from './Wrapper'
import { benefits } from '../constant'
import Project from './Project'

const Experience = () => {
  return (
    <Wrapper id="experience">
      <div className="container flex h-full flex-col text-white">
        <div className="projects flex h-1/2 items-center justify-between gap-2">
          {benefits.map((item) => (
            <Project key={item.id} item={item} />
          ))}
        </div>
        <div className="experiences h-1/2">Experience</div>
      </div>
    </Wrapper>
  )
}

export default Experience
