import Wrapper from './Wrapper'
import { benefits } from '../constant'
import Project from './Project'

const Experience = () => {
  return (
    <Wrapper id="experience">
      <div className="container grid h-full place-content-center text-white">
        <div>
          <h1 className="mb-3 text-5xl font-bold text-pink-600">Experience</h1>
          <div className="flex">
            {benefits.map((item) => (
              <Project key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-gradient mb-3 w-full text-right text-5xl font-bold text-pink-600">
            Portfolio
          </h1>
          <div className="flex">
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
