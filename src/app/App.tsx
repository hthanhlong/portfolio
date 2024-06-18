import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  About,
  Contact,
  Experience,
  Hero,
  Portfolios,
  PreLoad
} from '../components'

function App() {
  return (
    <div>
      <div className="app">
        <Hero />
        <About />
        <Experience />
        <Portfolios />
        <Contact />
        <PreLoad />
      </div>
      <ToastContainer limit={2} />
    </div>
  )
}

export default App
