import React, { useState, useEffect } from "react";
import './styles.scss';

import Modal from '../modal';

function Showcase() {

    const [showModal, setShowModal] = useState(false);
    const [index, setIndex] = useState(-1);
    
    const hideModal = () => {
        setShowModal(false);
    };

    const display = (value) => {
        setIndex(value);
        setShowModal(true);
    }

  return (
    <div className="showcase" id="showcase-section">
        <p className="showcase-header-text">Showcase</p>
        <div className="showcase-container">
        <div className="showcase-large">
              <div className="newcard" >
                  <div className="newcard-img1" onClick={() => {display(0)}}/>
                  <div className="newcard-body">
                      <div className="newcard-info">
                          <div className="newcard-header-text">Blendees</div>
                          <div className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</div>
                      </div>
                  </div>
                  

                  <div className="newcard-box" id="box4">
                      <div className="newcard-box-info">
                          <p className="newcardbox-header-text">Blendees</p>
                          <p className="newcardbox-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</p>
                          <p className="newcard-body-text">Blendees is a Black-owned smoothie and juice bar. The team redesigned Blendees’ website and marketing strategies to increase new user engagement, improved discoverability of their services, and amplified their voice as a healthy, Black-owned small business.</p>
                          <div className="newcard-view-items" onClick={() => {display(0)}}>
                              <p className="newcardbox-view-text">VIEW MORE</p>
                              <div className="newcard-rightarrow"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="newcard">
                  <div className="newcard-img2" onClick={() => {display(1)}}/>
                  <div className="newcard-body">
                      <div className="newcard-info">
                          <div className="newcard-header-text">Cafe X</div>
                          <div className="newcard-name-text">Minnie Chau, Fiona Feng, Francesco Medina, Shad Gabrielle Reyes, Nathen Shin, Camille Yabut</div>
                      </div>
                  </div>
                  

                  <div className="newcard-box" id="box2">
                      <div className="newcard-box-info">
                          <p className="newcardbox-header-text">Cafe X</p>
                          <p className="newcardbox-name-text">Minnie Chau, Fiona Feng, Francesco Medina, Shad Gabrielle Reyes, Nathen Shin, Camille Yabut</p>
                          <p className="newcard-body-text">Cafe X: By Any Beans Necessary is a Black, women-owned coffee shop. The team worked on a brand refresh: creating new brand style guides, integrating an e-commerce site, and improving customer acquisition / retention strategies.</p>
                          <div className="newcard-view-items" onClick={() => {display(1)}}>
                              <p className="newcardbox-view-text">VIEW MORE</p>
                              <div className="newcard-rightarrow"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="newcard">
                  <div className="newcard-img3" onClick={() => {display(2)}}/>
                  <div className="newcard-body">
                      <div className="newcard-info">
                          <div className="newcard-header-text">Cut & Dry Barbershop</div>
                          <div className="newcard-name-text">Julie Han, Fernando Reyes Jr, Thuy-An Hoang, Khiem Pham, Lillian Wei</div>
                      </div>
                  </div>
                  

                  <div className="newcard-box" id="box1">
                      <div className="newcard-box-info">
                          <p className="newcardbox-header-text">Cut & Dry Barbershop</p>
                          <p className="newcardbox-name-text">Julie Han, Fernando Reyes Jr, Thuy-An Hoang, Khiem Pham, Lillian Wei</p>
                          <p className="newcard-body-text">Cut & Dry Barbershop is an Asian American-owned barbershop. The team created a brand new, user-friendly website and revamped their social media content to increase business awareness and build their brand surrounding barber culture.</p>
                          <div className="newcard-view-items" onClick={() => {display(2)}}>
                              <p className="newcardbox-view-text">VIEW MORE</p>
                              <div className="newcard-rightarrow"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>        
              
          
          <div className="showcase-large2">
              <div className="newcard">
                  <div className="newcard-img4" onClick={() => {display(3)}}/>
                  <div className="newcard-body">
                      <div className="newcard-info">
                          <div className="newcard-header-text">Furlicious</div>
                          <div className="newcard-name-text">Princess Labrador, Autumn Bui, Matthew Chijioke, Hannah Nicole Espejo</div>
                      </div>
                  </div>
                  

                  <div className="newcard-box" id="box1">
                      <div className="newcard-box-info">
                          <p className="newcardbox-header-text">Furlicious</p>
                          <p className="newcardbox-name-text">Princess Labrador, Autumn Bui, Matthew Chijioke, Hannah Nicole Espejo</p>
                          <p className="newcard-body-text">Furlicious is a Black-owned pet care and training business. The team’s mission is to create an effective marketing plan and aesthetic social media revamp that invites pet owners to engage with Furlicious’s content and services!</p>
                          <div className="newcard-view-items" onClick={() => {display(3)}}>
                              <p className="newcardbox-view-text">VIEW MORE</p>
                              <div className="newcard-rightarrow"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="newcard">
                  <div className="newcard-img5" onClick={() => {display(4)}}/>
                  <div className="newcard-body">
                      <div className="newcard-info">
                          <div className="newcard-header-text">Kini Koffee</div>
                          <div className="newcard-name-text">Stella Seki, Rainee Pei, Edward De Leon, Deepika Vuppala, Chynna Tumalad</div>
                      </div>
                  </div>
                  

                  <div className="newcard-box" id="box3">
                      <div className="newcard-box-info">
                          <p className="newcardbox-header-text">Kini Koffee</p>
                          <p className="newcardbox-name-text">Stella Seki, Rainee Pei, Edward De Leon, Deepika Vuppala, Chynna Tumalad</p>
                          <p className="newcard-body-text">Kini Koffee is a women-led and run coffee shop. The team is bringing people to the rooftops of Del Mar by creating a customer-centered website and social media marketing strategy for Kini Koffee.</p>
                          <div className="newcard-view-items" onClick={() => {display(4)}}>
                              <p className="newcardbox-view-text">VIEW MORE</p>
                              <div className="newcard-rightarrow"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="showcase-medium">
              <div className="newcard">
                  <div className="newcard-img1" onClick={() => {display(0)}}/>
                  <div className="newcard-body">
                      <div className="newcard-info">
                          <div className="newcard-header-text">Blendees</div>
                          <div className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</div>
                      </div>
                  </div>
                  

                  <div className="newcard-box" id="box4">
                      <div className="newcard-box-info">
                          <p className="newcardbox-header-text">Blendees</p>
                          <p className="newcardbox-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</p>
                          <p className="newcard-body-text">Blendees is a Black-owned smoothie and juice bar. The team redesigned Blendees’ website and marketing strategies to increase new user engagement, improved discoverability of their services, and amplified their voice as a healthy, Black-owned small business.</p>
                          <div className="newcard-view-items" onClick={() => {display(0)}}>
                              <p className="newcardbox-view-text">VIEW MORE</p>
                              <div className="newcard-rightarrow"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="newcard">
                  <div className="newcard-img2" onClick={() => {display(1)}}/>
                  <div className="newcard-body">
                      <div className="newcard-info">
                          <div className="newcard-header-text">Cafe X</div>
                          <div className="newcard-name-text">Minnie Chau, Fiona Feng, Francesco Medina, Shad Gabrielle Reyes, Nathen Shin, Camille Yabut</div>
                      </div>
                  </div>
                  

                  <div className="newcard-box" id="box2">
                      <div className="newcard-box-info">
                          <p className="newcardbox-header-text">Cafe X</p>
                          <p className="newcardbox-name-text">Minnie Chau, Fiona Feng, Francesco Medina, Shad Gabrielle Reyes, Nathen Shin, Camille Yabut</p>
                          <p className="newcard-body-text">Cafe X: By Any Beans Necessary is a Black, women-owned coffee shop. The team worked on a brand refresh: creating new brand style guides, integrating an e-commerce site, and improving customer acquisition / retention strategies.</p>
                          <div className="newcard-view-items" onClick={() => {display(1)}}>
                              <p className="newcardbox-view-text">VIEW MORE</p>
                              <div className="newcard-rightarrow"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>        
              
          
          <div className="showcase-medium">
              <div className="newcard">
                  <div className="newcard-img3" onClick={() => {display(2)}}/>
                  <div className="newcard-body">
                      <div className="newcard-info">
                          <div className="newcard-header-text">Cut & Dry Barbershop</div>
                          <div className="newcard-name-text">Julie Han, Fernando Reyes Jr, Thuy-An Hoang, Khiem Pham, Lillian Wei</div>
                      </div>
                  </div>
                  

                  <div className="newcard-box" id="box1">
                      <div className="newcard-box-info">
                          <p className="newcardbox-header-text">Cut & Dry Barbershop</p>
                          <p className="newcardbox-name-text">Julie Han, Fernando Reyes Jr, Thuy-An Hoang, Khiem Pham, Lillian Wei</p>
                          <p className="newcard-body-text">Cut & Dry Barbershop is an Asian American-owned barbershop. The team created a brand new, user-friendly website and revamped their social media content to increase business awareness and build their brand surrounding barber culture.</p>
                          <div className="newcard-view-items" onClick={() => {display(2)}}>
                              <p className="newcardbox-view-text">VIEW MORE</p>
                              <div className="newcard-rightarrow"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="newcard">
                  <div className="newcard-img4" onClick={() => {display(3)}}/>
                  <div className="newcard-body">
                      <div className="newcard-info">
                          <div className="newcard-header-text">Furlicious</div>
                          <div className="newcard-name-text">Princess Labrador, Autumn Bui, Matthew Chijioke, Hannah Nicole Espejo</div>
                      </div>
                  </div>
                  

                  <div className="newcard-box" id="box1">
                      <div className="newcard-box-info">
                          <p className="newcardbox-header-text">Furlicious</p>
                          <p className="newcardbox-name-text">Princess Labrador, Autumn Bui, Matthew Chijioke, Hannah Nicole Espejo</p>
                          <p className="newcard-body-text">Furlicious is a Black-owned pet care and training business. The team’s mission is to create an effective marketing plan and aesthetic social media revamp that invites pet owners to engage with Furlicious’s content and services!</p>
                          <div className="newcard-view-items" onClick={() => {display(3)}}>
                              <p className="newcardbox-view-text">VIEW MORE</p>
                              <div className="newcard-rightarrow"></div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          <div className="showcase-medium">
              <div className="newcard">
                  <div className="newcard-img5" onClick={() => {display(4)}} />
                  <div className="newcard-body">
                      <div className="newcard-info">
                          <div className="newcard-header-text">Kini Koffee</div>
                          <div className="newcard-name-text">Stella Seki, Rainee Pei, Edward De Leon, Deepika Vuppala, Chynna Tumalad</div>
                      </div>
                  </div>
                  

                  <div className="newcard-box" id="box3">
                      <div className="newcard-box-info">
                          <p className="newcardbox-header-text">Kini Koffee</p>
                          <p className="newcardbox-name-text">Stella Seki, Rainee Pei, Edward De Leon, Deepika Vuppala, Chynna Tumalad</p>
                          <p className="newcard-body-text">Kini Koffee is a women-led and run coffee shop. The team is bringing people to the rooftops of Del Mar by creating a customer-centered website and social media marketing strategy for Kini Koffee.</p>
                          <div className="newcard-view-items" onClick={() => {display(4)}}>
                              <p className="newcardbox-view-text">VIEW MORE</p>
                              <div className="newcard-rightarrow"></div>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
        <a className="red-button" target="_blank" href="https://www.youtube.com/watch?v=nwLe9DxReDE&feature=youtu.be">
            <div>
                <p className="red-button-text">Showcase Recording</p>
            </div>
        </a>
    </div>
    <Modal
            show={showModal}
            onHide={() => {hideModal()}} 
            index={index} 
        />   
    

    
  </div>
  )
}

export default Showcase