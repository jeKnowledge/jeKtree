import React, { useEffect, useState } from "react";
import Data from './data.json'
import { Header, ContLinks, Links, SubTitle, ContEvent, EventLogo, EventImg, Footer, Social, ContDots, EventTitle } from './styles'


function App() {

  const isMobile = window.screen.width < 600
  const [current, setCurrent] = useState(0);
  const length = Data.Events.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const moveSlide = index => {
    setCurrent(index)
  }
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
          <EventLogo className='sliderL'>
            {Data.Events.map((Image, index) => {
              return (
                <div
                  className={index === current ? 'slide activeL' : 'slideL'}
                  key={index}
                >
                  {index === current && (
                    <img src={Image.pathLogo} alt="" className='imageL' />
                  )}
                </div>
              );
            })}
          </EventLogo>
          <EventImg className='slider'>
            {Data.Events.map((Image, index) => {
              return (
                <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}
                >
                  {index === current && (
                    <img src={Image.pathImg} alt="" className='image' />
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
              onClick={() => moveSlide(index)}
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
