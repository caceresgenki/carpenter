import Hero from './Hero'
import Body from './Body'
import Testimonials from './Testimonials'
import Contact from '../home/Contact'

function Home() {
  
  return (
    <>
      <main>
       <Hero/>
       <Testimonials/>
      </main>
       <Body/>
      <main>
       <Contact/>
      </main>
    </>
  )
}

export default Home