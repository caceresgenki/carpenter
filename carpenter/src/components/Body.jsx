import image2 from '../image/wood2.jpg'
import '../styles/Body.css'



function Body() {
  
    return (
      <>
        <section className='section2'>
          <div className='sectionTitle2'>
            <h2 className='titleSection2'>Muebles únicos y a medida</h2>
            <p className='desciptSection2'>Calidad y atención personalizada para transformar tus espacios</p>
          </div>
          <div className='sectionImage'>
            <div className='imageSection2'>
              <img className='image2' src={image2} alt='Image Wood' />
            </div>
            <div className='sectionImage2'>
              <h3 className='titleImage'>
                Diseño personalizado</h3>
              <p className='descripImage2'>
                Nos especializamos en crear muebles a medida que se adapten perfectamente a tus espacios y necesidades. Como expertos en diseño trabajamos contigo para crear piezas únicas y personalizadas.</p>
            </div>
            <div className='sectionImage2'>
              <h3 className='titleImage'>
                Diseño personalizado</h3>
              <p className='descripImage2'>
                Nos especializamos en crear muebles a medida que se adapten perfectamente a tus espacios y necesidades. Como expertos en diseño trabajamos contigo para crear piezas únicas y personalizadas.</p>
            </div>
            <div className='imageSection2'>
              <img className='image2' src={image2} alt='Image Wood' />
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Body
  