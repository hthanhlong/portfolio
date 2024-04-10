import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  About,
  Contact,
  Hero,
  Experience,
  PreLoad,
  Portfolios
} from './components'

function App() {
  return (
    <>
      <div className="app">
        <Hero />
        <About />
        <Experience />
        <Portfolios />
        <Contact />
        <PreLoad />
      </div>
      <ToastContainer limit={2} />
    </>
  )
}

export default App
