import {
  About,
  Contact,
  Hero,
  Nav,
  Experience,
  PreLoad,
  Portfolios
} from './components'

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Portfolios />
      <Contact />
      <PreLoad />
    </div>
  )
}

export default App
