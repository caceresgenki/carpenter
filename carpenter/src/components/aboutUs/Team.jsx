import image1 from '../../image/wood6.jpg'
import image2 from '../../image/wood7.jpg'
import image3 from '../../image/wood8.jpg'
import '../../styles/aboutUs/team.css'


function Team() {
  
    return (
      <>
        <section className='teamAbout'>
          <div className='imagesAbout'>
            <div className='imageAbout1'><img src={image1} alt='Image Carpenter'/></div>
            <div className='imageAbout2'><img src={image2} alt='Image Carpenter'/></div>
            <div className='imageAbout3'><img src={image3} alt='Image Carpenter'/></div>
          </div>
        </section>
        <section>
          <div className='textAboutTeam'>
            <h3 className='titleAboutTeam'>Nuestro Equipo</h3>
            <p className='descriptionAboutTeam'>Carpintería fue fundada por un grupo de expertos en diseño y carpintería con una pasión compartida por crear muebles únicos y a medida. Nuestro equipo está compuesto por profesionales altamente capacitados y dedicados a ofrecer la mejor calidad y servicio.</p>
            <div className='decoAboutTeam'></div>
          </div>
        </section>
      </>
    )
  }
  
  export default Team