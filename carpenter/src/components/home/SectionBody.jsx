

function SectionBody({ image, imageAlt, imageSectionProps, text, description }) {
  
  return (
    <>

      <div className={imageSectionProps}>
        <div className='imageSection2'>
          <img className='image2' src={image} alt={imageAlt} />
        </div>
        <div className='sectionImage2'>
          <h3 className='titleImage'>{text}</h3>
          <p className='descripImage2'>{description}</p>
        </div>
      </div>
      </>
    )
  }
  
  export default SectionBody