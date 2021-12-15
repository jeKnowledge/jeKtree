import React from "react";
import logo from './Images/Logo.png'
import logosub from './Images/LogoSubTitle.png'
import Data from './data.json'

//import linkedin from './Images/linkedin.png'

import { Body, Img, Container, ContLinks, Links, ContSocials, Social, SubTitle, ContEvent, } from './styles'



function App() {

  const isMobile = window.screen.width < 600
  if (isMobile) {
    return (
      <Body>
        <img src={logo} width="50%" height="50%" alt="" />
        <Img><img src={logosub} width="60%" height="60%" alt="" /></Img>
        <Container>
          <ContSocials>
            {
              Data.Social.map(data => {
                return (
                  <div key={data.name}>
                    <Social onClick={() => window.open(data.link, "_self")}><img src={data.path} width={25} height={25} alt={data.name} /></Social>
                  </div>
                )
              })
            }
          </ContSocials>
          <ContLinks>
            {
              Data.Links.map(data => {
                return (
                  <div key={data.name}>
                    <Links onClick={() => window.open(data.link, "_self")}>{data.name}</Links>
                  </div>
                )
              })
            }

          </ContLinks>
          <SubTitle>Our Events</SubTitle>
          <ContEvent>
            {
              Data.Events.map(data => {
                return (
                  <div key={data.name}>
                    <div onClick={() => window.open(data.link, "_self")}>
                      <img src={data.path} width="100vw" height="100vh" alt={data.name} />
                    </div>
                  </div>
                )
              })
            }
          </ContEvent>
        </Container>
      </Body>
    );
  } else {
    return (
      <p>Width {'>'} 600</p>
    );
  }

}

export default App;
