import Hero from './Hero'
import Body from './Body'
import Testimonials from './Testimonials'
import Contact from '../home/Contact'
import Team from './Team'

function Home() {
  
  return (
    <>
      <main>
       <Hero/>
       <Testimonials/>
       <Body/>
       </main>
       <Team/>
       <main>
       <Contact/>
      </main>
    </>
  )
}

export default Home
