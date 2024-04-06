



function ButtonWS() {

  const handleButtonClick = () => {
    // Lógica para redirigir al enlace de WhatsApp
    window.location.href = 'https://api.whatsapp.com/send?phone=1234567890';
  };

  return (
    <button onClick={handleButtonClick}>
      Mensaje en WhatsApp
    </button>
  );
  }
  
  export default ButtonWS
