import '../styles/Footer.css'

const textGC = "<GC/>"

function Footer() {
  
    return (
      <>
        <section className='footer'>
          <div className='sectionFooter'>
            <div>
              <h2 className='textFooter'>
                Carpintería Geri Cáceres
              </h2>
            </div>
            <div className='footerContact'>
              <a 
                href={`tel:04248474578`}
                title={`Llamar por teléfono a Geri Cáceres al número 0424-`}
                target='_blank'
                rel='noopener noreferrer'>
                Teléfono: +58 424-8474578
              </a>
              <a
                href={`mailto:geri.caceres@gmail.com`}
                title={`Enviar un correo electrónico a Gerí Cáceres al correo geri.caceres@gmail.com`}
                target='_blank'
                rel='noopener noreferrer'>
                E-mail: geri.caceres@gmail.com
                </a>
            </div>
          </div>
          <p className='create'>Creado por <a href="https://cvgenkicaceres.netlify.app/" target='_blank'>{textGC}</a></p>
        </section>
      </>
    )
  }
  
  export default Footer
  