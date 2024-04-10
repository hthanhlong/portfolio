import { motion } from 'framer-motion'
import HireMeButton from './HireMeButton'
// import { useState } from 'react'

const link = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Experience',
    href: '#experience'
  },
  {
    label: 'Portfolios',
    href: '#portfolios'
  },
  {
    label: 'Contact',
    href: '#contact'
  }
]

const Nav = () => {
  // const [active, setActive] = useState('Home')

  const active = 'Home'
  return (
    <div className="fixed right-0 top-0 z-50 w-full overflow-hidden">
      <div className="container px-8">
        <motion.div
          whileInView={{
            y: [-80, 0],
            opacity: [0, 1]
          }}
          transition={{
            duration: 0.3
          }}
          className="flex h-20 items-center"
        >
          <div className="flex flex-1 justify-between">
            <div className="nav-left flex items-center lg:gap-10">
              <h1 className="font-bold text-white lg:text-2xl">Long Hoang</h1>
              <nav className="max-lg:hidden">
                <ul className="flex gap-6 font-semibold text-white">
                  {link.map((item, index) => (
                    <li
                      key={index}
                      className={`smooth duration-400 cursor-pointer transition-all hover:scale-105 hover:text-pink-500 ${active === item.label ? 'text-pink-500' : ''}`}
                    >
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="nav-right flex items-center gap-8">
              <a href="#contact">
                <HireMeButton />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Nav
