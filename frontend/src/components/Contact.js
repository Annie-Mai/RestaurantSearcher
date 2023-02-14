import React from 'react'
import "../styles/Contact.css";

const Contact = () => {
  const annieqr = require("../assets/annieqr.jpg");
  const lizaqr = require("../assets/lizaqr.png");
  const chloeqr = require("../assets/chloeqr.png");
  return (
    <div className='contactContainer'>
      <div class="about-section">
        <h1>✨ Our Team! ✨</h1>
        <p>Feel free to connect with us on linkedin c:</p>
      </div>
      <div className='row'>
        <div className='column'>
          <div className='card'>
            <div className='containers'>
              <h2>Annie Mai</h2>
              <p className='title'> Contributor </p>
              {/* <p className='ctext'>Some text that describes me lorem ipsum ipsum lorem.</p> */}
              <img src={annieqr} width="100" height="100" />
              <p className='ctext'>anniemai025@gmail.com</p>
              <p className='buttonCont'>
                <button className="buttons">
                  <a href="https://www.linkedin.com/in/annie-mai-604044233/">LinkedIn</a>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="containers">
            <h2>Chloe Albright</h2>
            <p class="title">Contributor</p>
            {/* <p className='ctext'>Some text that describes me lorem ipsum ipsum lorem.</p> */}
            <img src={chloeqr} width="100" height="100" />
            <p className='ctext'>chloemariealbright@gmail.com</p>
            <p className='buttonCont'>
              <button className="buttons">
                <a href="https://www.linkedin.com/in/chloe-albright-74a828131/">LinkedIn</a>
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="containers">
            <h2>Liza Feng</h2>
            <p class="title">Contributor</p>
            {/* <p className='ctext'>Some text that describes me lorem ipsum ipsum lorem.</p> */}
            <img src={lizaqr} width="100" height="100" />
            <p className='ctext'>Liza.feng05@myhunter.cuny.edu</p>
            <p className='buttonCont'>
              <button className="buttons">
                <a href="https://www.linkedin.com/in/liza-feng/">LinkedIn</a>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact