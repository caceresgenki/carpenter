import NavBar from './components/NavBar'
import Home from './components/home/Home'
import AboutUs from './components/aboutUs/AboutUs'
import Service from './components/services/Service'
import Footer from './components/Footer'



function App() {
  
  return (
    <>
      <header>
        <NavBar/>
      </header>

        {/* <Home/> */}
        {/* <AboutUs/> */}
        <Service/>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
