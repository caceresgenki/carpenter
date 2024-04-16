import Hero from './Hero'
import Body from './Body'
import Testimonials from './Testimonials'
import Contact from './Contact'

function Home() {
  
  return (
    <>
      <main>
        <Hero/>
        <Body/>
      </main>
      <Testimonials/>
      <main>
        <Contact/>
      </main>
    </>
  )
}

export default Home
