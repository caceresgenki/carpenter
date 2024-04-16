import User from '../../icons/User'
import '../../styles/home/Testimonials.css'
import Image from '../../image/points.png'

function Testimonials() {

    return (
      <>
        <section>
          <article className='articleTestimonials'>
            <p className='styleText'>
              "Estoy encantado de haber encontrado una carpintería que entienda mis necesidades y pueda crear muebles a medida que se adapten perfectamente a mi hogar."
            </p>
            <p className='user styleText'><User colorUser={'white'}/><span className='nameUser styleText'>Samer Abdul</span></p>
            <img src={Image} alt="points" className='pointsTestimonials' />
          </article>
        </section>
      </>
    )
  }
  
  export default Testimonials