import '../../styles/services/services.css'
import Image1 from '../../image/wood13.webp'
import Image2 from '../../image/wood14.webp'
import Image3 from '../../image/wood15.webp'



function Services() {
  
  return (
    <>
      <section className='servicesSection'>
        <div className='descriptionServices'>
          <div className='titleServices'>
            <h2 className='titleDescription'>Diseño y construcción personalizada</h2>
            <h3 className='subtitleDescription'>Muebles únicos y personalizados para tus espacios<span>.</span></h3>
          </div>
          <div className='subTitleServices1 subtitleServices'>
            <h3>Diseño personalizado</h3>
            <p>Trabajamos contigo para crear diseños personalizados que se adapten a tus gustos y necesidades. Cada pieza de mobiliario es única y refleja tu estilo personal.</p>
          </div>
          <div className='subTitleServices2 subtitleServices'>
            <h3>Materiales de alta calidad</h3>
            <p>Utilizamos solo los mejores materiales para garantizar la durabilidad y belleza de nuestros muebles. Cada pieza está construida con atención a los detalles y acabados de alta calidad.</p>
          </div>
          <div className='subTitleServices3 subtitleServices'>
            <h3>Atención personalizada</h3>
            <p>Valoramos a cada cliente y nos esforzamos por brindar una atención personalizada. Nos aseguramos de entender tus necesidades y deseos para crear muebles que reflejen tu estilo y personalidad.</p>
          </div>
        </div>
        <div className='imagesServices'>
          <section className='imageSectionServices'>
            <div className='imageWood1 imageWood'>
              <img src={Image1} alt='Image Wood' />
            </div>
            <div className='imageWood2 imageWood'>
              <img src={Image2} alt='Image Wood' />
            </div>
            <div className='imageWood3 imageWood'>
              <img src={Image3} alt='Image Wood' />
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Services