import React from 'react';
import './styles.css';

function Design2 () {
  return (
    <main>
        <div className="container-fluid" id="gradient">
          <div className="container">
            <h1 className="slide-bottom">Sonhe, <br/> Arquitete,  <br/>Construa.</h1>
            <br/>
            <h1 id="pre-title">Seu evento com a</h1>
            <br/>
            <br/>
            <h1 id="title">POLI DESIGN</h1>
          </div>
          <div className="container" id="buttons">
            <a href="https://www.facebook.com/Poli.DesignArq.Promocional/?locale=pt_BR" className="btn btn-primary" id="fc">Facebook</a>
            <a href="https://polidesign.com.br" className="btn btn-success" id="st">Site</a>
            <a href="mailto:atendimento@polidesign.com.br" className="btn btn-danger" id="em">Contato</a>
          </div>
        </div> 
    </main>
  );
}

export default Design2;
