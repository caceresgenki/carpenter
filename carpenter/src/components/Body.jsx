import SectionBody from './SectionBody'
import image2 from '../image/wood2.jpg'
import image3 from '../image/wood3.jpg'
import image4 from '../image/wood4.jpg'
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
            <SectionBody
              image={image2}
              imageAlt='Image Wood'
              imageSectionProps='imageSectionBody'
              text='Diseño personalizado'
              description='Nos especializamos en crear muebles a medida que se adapten perfectamente a tus espacios y necesidades. Como expertos en diseño trabajamos contigo para crear piezas únicas y personalizadas.' />
            <SectionBody
              image={image3}
              imageAlt='Image Wood'
              imageSectionProps='imageSectionBody2'
              text='Materiales de alta calidad'
              description='Utilizamos solo los mejores materiales para garantizar la durabilidad y belleza de nuestros muebles. Cada pieza está cuidadosamente construida con atención a los detalles y acabados de alta calidad.' />
            <SectionBody
              image={image4}
              imageAlt='Image Wood'
              imageSectionProps='imageSectionBody'
              text='Atención personalizada'
              description='Valoramos a cada cliente y nos esforzamos por brindar una atención personalizada. Entendemos tus necesidades y deseos para crear muebles que reflejen tu estilo y personalidad.' />
           
          </div>
        </section>
      </>
    )
  }
  
  export default Body
  