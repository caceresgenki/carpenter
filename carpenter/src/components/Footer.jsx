import '../styles/Footer.css'
import Phone from '../icons/Phone'
import Mail from '../icons/Mail'
import Whatsapp from '../icons/Whatsapp'

const textGC = '<GC/>'

function Footer() {
  
    return (
      <>
        <footer>
          <section className='footer'>
            <div className='sectionFooter'>
              <div>
                <h2 className='textFooter'>
                  Carpintería Geri Cáceres
                </h2>
              </div>
              <div className=''>
                <div className='footerContact'>
                  <a 
                    href={`tel:04248474578`}
                    title={`Llamar por teléfono a Geri Cáceres al número 0424-`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon'>
                    <Phone/>
                  </a>
                  <a
                    href={`mailto:gericaceres76@gmail.com`}
                    title={`Enviar un correo electrónico a Gerí Cáceres al correo geri.caceres@gmail.com`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon'>
                    <Mail/>
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?phone=584248474578`}
                    title={`Enviar Whatsapp a Gerí Cáceres`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icon'>
                    <Whatsapp/>
                  </a>
                </div>
                <div className='textContactFooter'>
                  <p>E-mail: gericaceres76@gmail.com</p>
                  <p>Teléfono: 04248474578</p>
                </div>
              </div>
            </div>
            <p className='create'>Desarrollado por <a href="https://cvgenkicaceres.netlify.app/" target='_blank'>{textGC}</a></p>
          </section>
        </footer>
      </>
    )
  }
  
  export default Footer
  