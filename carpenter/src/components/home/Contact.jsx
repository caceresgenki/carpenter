import Wave1 from '../../image/Wave1'
import Wave2 from '../../image/Wave2'
import ButtonWS from './ButtonWS'
import image from '../../image/points.png'
import '../../styles/home/Contact.css'




function Contact() {
  
    return (
      <>
        <section>
          <article className='sectionContact'>
            <div className='infoContact'>
              <h3 className='textContact'>
                Contáctanos hoy mismo<span>.</span>
              </h3>
              <ButtonWS/>
            </div>
            <Wave1 className='waves'/>
            <Wave2 className='waves'/>
          </article>
        </section>
      </>
    )
  }
  
  export default Contact
  