import './styles.css';

function Design1() {
  return (
    <>
        <div className="container-fluid" id="gradient">
            <div className="container">
                <h1 className="slide-bottom">Sonhe, <br/> Arquitete,  <br/>Construa.</h1>
                <br/>
                <h1 id="pre-title">Seu evento com a</h1>
                <br/>
                <br/>
                <h1 id="title">POLI DESIGN</h1>
            </div>
        </div> 
        <div className="container" id="buttons">
            <a href="https://www.facebook.com/Poli.DesignArq.Promocional/?locale=pt_BR" className="btn btn-primary" id="fc"><li className="fab fa-facebook-square"></li> Facebook</a>
            <a href="https://polidesign.com.br" className="btn btn-success" id="st"><li className=" fas fa-globe"></li> Site</a>
            <a href="mailto:atendimento@polidesign.com.br" className="btn btn-danger" id="em"><li className="fas fa-address-book"></li> Contato</a>
            <a href="/QrSocial-main/pages/design-2" className="btn btn-primary" id="ds">Design 2</a>
        </div>
    </>
  );
}

export default Design1;
