import React, { useEffect, useState } from "react";
import Data from './data.json'
import { Header, ContLinks, Links, SubTitle, ContEvent, EventLogo, EventImg, Footer, Social, ContDots, EventTitle } from './styles'


function App() {

  const isMobile = window.screen.width < 600
  const [current, setCurrent] = useState(0);
  const length = Data.Events.length;

  const proxEvento = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const moveEvento = index => {
    setCurrent(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      proxEvento();
    }, 5000)
    return () => clearInterval(interval)
  }, [proxEvento]);

  if (isMobile) {
    return (
      <div>
        <Header>
          <div><img src="Logo.png" width="32%" height="32%" alt="" /></div>
          <img src="LogoSubTitle.png" width="37%" height="37%" alt="" />
        </Header>

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
          <EventLogo className='LogoSlide'>
            {Data.Events.map((Image, index) => {
              return (
                <div
                  className={index === current ? 'logo ativo' : 'logo'}
                  key={index}
                >
                  {index === current && (
                    <img src={Image.pathLogo} alt="" className='Imglogo' />
                  )}
                </div>
              );
            })}
          </EventLogo>
          <EventImg className='EventoSlide'>
            {Data.Events.map((Image, index) => {
              return (
                <div
                  className={index === current ? 'Evento ativo' : 'Evento'}
                  key={index}
                >
                  {index === current && (
                    <img src={Image.pathImg} alt="" className='ImgEvent' />
                  )}
                </div>
              );
            })}
          </EventImg>

        </ContEvent>
        <EventTitle>{Data.Events[current].name}</EventTitle>
        <ContDots>
          {Array.from({ length: Data.Events.length }).map((item, index) => (
            <div
              onClick={() => moveEvento(index)}
              className={index === current ? "dot active" : "dot"}
            ></div>
          ))}
        </ContDots>

        <Footer>
          {

            Data.Social.map(data => {
              return (
                <div key={data.name}>
                  <Social onClick={() => window.open(data.link, "_self")}><img src={data.path} alt={data.name} /></Social>
                </div>
              )
            })
          }
        </Footer>








      </div >
    );
  } else {
    return (
      <p>Width {'>'} 600</p>
    );
  }

}

export default App;
