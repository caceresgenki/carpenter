import '../../styles/home/ButtonWS.css';



function ButtonWS() {

  const handleButtonClick = () => {
    window.open ('https://api.whatsapp.com/send?phone=584248474578', '_blank');
  };

  return (
    <div>
      <button className='buttonWS'
         onClick={handleButtonClick}>
        Mensaje en WhatsApp
      </button>
    </div>
  );
  }
  
  export default ButtonWS
