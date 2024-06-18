import Wrapper from '../Wrapper'
import { portfolio } from '../../data/constant'
import Portfolio from '../Portfolio'
import { motion } from 'framer-motion'

const Portfolios = () => {
  return (
    <Wrapper id="portfolios">
      <div className="flex-center h-full">
        <div className="grid place-content-center text-white">
          <h1 className="mb-3 text-right text-2xl font-bold text-pink-600 lg:text-4xl">
            Portfolio
          </h1>
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
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
      </div>
    </Wrapper>
  )
}

export default Portfolios
