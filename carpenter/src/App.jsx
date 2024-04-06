import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Body from './components/Body'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/NavBar.css'

function App() {
  
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <Hero/>
        <Body/>
        <Testimonials/>
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
