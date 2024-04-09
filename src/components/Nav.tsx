import { motion } from 'framer-motion'
import HireMeButton from './HireMeButton'
import { useState } from 'react'

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
    label: 'Contact',
    href: '#contact'
  }
]

const Nav = () => {
  const [active, setActive] = useState('Home')

  return (
    <div className="nav fixed top-0 w-full overflow-hidden bg-gradient-to-b from-[#000000] to-[transparent]">
      <div className="container">
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
              <nav>
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
