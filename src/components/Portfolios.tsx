import Wrapper from './Wrapper'
import { portfolio } from '../constant'
import Portfolio from './Portfolio'
import { motion } from 'framer-motion'

const Portfolios = () => {
  return (
    <Wrapper id="portfolios">
      <div className="container grid place-content-center text-white">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-right text-2xl font-bold text-pink-600">
            Portfolio
          </h1>
          <div className="flex flex-col gap-4 lg:flex-row">
            {portfolio.map((item) => (
              <Portfolio
                key={item.id}
                item={{
                  ...item,
                  thumbnail: item.thumbnail || 'defaultThumbnail.jpg',
                  linkGithub: item.linkGithub || '',
                  linkLive: item.linkLive || ''
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </Wrapper>
  )
}

export default Portfolios
