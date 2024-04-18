import '../../styles/aboutUs/Testimonials.css'
import Star from '../../icons/Star'


function Testimonials() {
  
    return (
      <>
        <section className='testimonialsAbout'>
          <h3 className='textAboutTestimonials'>Amado por muchos</h3>
          <p className='descriptionAboutTestimonials'>Estoy encantado de haber encontrado una carpintería que entienda mis necesidades y pueda crear muebles a medida que se adapten perfectamente a mi negocio</p>
          <div className='starTestimonials'>
            <Star/><Star/><Star/><Star/><Star/>
          </div>
          <div className='solidAboutTestimonials1'></div>
        </section>
      </>
    )
  }
  
  export default Testimonials