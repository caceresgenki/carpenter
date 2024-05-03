import '../../styles/services/design.css'
import Image1 from '../../image/wood10.webp'
import Image2 from '../../image/wood11.jpg'
import Image3 from '../../image/wood12.webp'


function Design() {
  
    return (
      <>
        <section className='desingSection'>
          <div className='titleDesign'>
            <h2 className='texttTileDesign'>Diseño y construcción de muebles a medidas<span>.</span></h2>
            <p className='textDesign'>En Carpintería, nos especializamos en la creación de muebles a medida que se adaptan perfectamente a tus espacios y necesidades. Nuestro equipo de expertos en diseño y carpintería trabajará contigo para crear piezas únicas y personalizadas.</p>
          </div>
          <div className='desciptionDesign'>
            <article className='articleDesign'>
              <div className='imageDesign'>
                <img className='imgDesign' src={Image1} alt="Image Wood" />
              </div>
              <h3 className='titleArtDesign'>Diseño personalizado</h3>
              <p className='textArtDesign'>En Carpintería, nos especializamos en crear muebles a medida que se adapten perfectamente a tus espacios y necesidades. Nuestro equipo de expertos en diseño trabajará contigo para crear piezas únicas y personalizadas.</p>
            </article>
            <article className='articleDesign'>
              <div className='imageDesign'>
                <img className='imgDesign' src={Image2} alt="Image Wood" />
              </div>
              <h3 className='titleArtDesign'>Materiales de alta calidad</h3>
              <p className='textArtDesign'>Utilizamos solo los mejores materiales para garantizar la durabilidad y belleza de nuestros muebles. Cada pieza está cuidadosamente construida con atención a los detalles y acabados de alta calidad.</p>
            </article>
            <article className='articleDesign'>
              <div className='imageDesign'>
                <img className='imgDesign' src={Image3} alt="Image Wood" />
              </div>
              <h3 className='titleArtDesign'>Atención personalizada</h3>
              <p className='textArtDesign'>En Carpintería, valoramos a cada cliente y nos esforzamos por brindar una atención personalizada. Nos aseguramos de entender tus necesidades y deseos para crear muebles que reflejen tu estilo y personalidad.</p>
            </article>
          </div>
        </section>
      </>
    )
  }
  
  export default Design