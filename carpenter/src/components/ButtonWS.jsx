import '../styles/ButtonWS.css';



function ButtonWS() {

  const handleButtonClick = () => {
    window.open ('https://api.whatsapp.com/send?phone=584248474578', '_blank');
  };

  return (
    <h4 >
      <button className='buttonWS'
         onClick={handleButtonClick}>
        Mensaje en WhatsApp
      </button>
    </h4>
  );
  }
  
  export default ButtonWS
