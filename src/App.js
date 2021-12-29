import React, { useEffect, useState } from "react";
import Data from './data.json'
import { HeaderMobile, ContLinksMobile, LinksMobile, SubTitleMobile, ContEventMobile, EventLogoMobile, EventImgMobile, FooterMobile, SocialMobile, ContDotsMobile, EventTitleMobile } from './MobileStyles'
import { Header, HeaderSocial, JekLogo, JekSubTitle, ContLinks, Links, SubTitle, ContEvent, EventLogo, EventImg, EventTitle, ContDots } from './DesktopStyles'


function App() {

  const isMobile = window.screen.width < 600

  const [hover, setHover] = useState(true);
  var element = document.getElementById('Event');
  if (element) {
    element.addEventListener('mouseenter', function () {
      setHover(false);
    });
    element.addEventListener('mouseleave', function () {
      setHover(true);
    });
  }

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
        <HeaderMobile>
          <div><img src="RedesSociais+Jek\\JekLogo.svg" width="32%" height="32%" alt="" /></div>
          <img src="RedesSociais+Jek\\JekSubTitle.svg" width="37%" height="37%" alt="" />
        </HeaderMobile>

        <ContLinksMobile >
          {
            Data.Links.map(data => {
              return (
                <div key={data.name}>
                  <LinksMobile onClick={() => window.open(data.link, "_self")}>{data.name}</LinksMobile>
                </div>
              )
            })
          }
        </ContLinksMobile>
        <SubTitleMobile>Our Events</SubTitleMobile>

        <ContEventMobile onClick={() => window.open(Data.Events[current].link, "_self")}>
          <EventLogoMobile className='LogoSlide' onClick={() => window.open(Data.Events[current].link, "_self")}>
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
          </EventLogoMobile>
          <EventImgMobile className='EventoSlide' onClick={() => window.open(Data.Events[current].link, "_self")}>
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
          </EventImgMobile>

        </ContEventMobile>
        <EventTitleMobile>{Data.Events[current].name}</EventTitleMobile>
        <ContDotsMobile>
          {Array.from({ length: Data.Events.length }).map((item, index) => (
            <div
              onClick={() => moveEvento(index)}
              className={index === current ? "dot active" : "dot"}
            ></div>
          ))}
        </ContDotsMobile>

        <FooterMobile>
          {
            Data.Social.map(data => {
              return (
                <div key={data.name}>
                  <SocialMobile onClick={() => window.open(data.link, "_self")}><img src={data.path} alt={data.name} /></SocialMobile>
                </div>
              )
            })
          }
        </FooterMobile>
      </div >
    );
  } else {
    return (
      <div>
        <Header>
          <HeaderSocial>
            {

              Data.Social.map(data => {
                return (
                  <div key={data.name} onClick={() => window.open(data.link, "_self")}><img src={data.path} alt={data.name} /></div>
                )
              })
            }
          </HeaderSocial>
        </Header>
        <JekLogo><img src="RedesSociais+Jek\\JekLogo.svg" width={125} height={125} alt="" /></JekLogo>
        <JekSubTitle><img src="RedesSociais+Jek\\JekSubTitle.svg" width={200} height={200} alt="" /></JekSubTitle>

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
        <ContEvent id="Event" onClick={() => window.open(Data.Events[current].link, "_self")}>
          <EventLogo className='LogoSlide' onClick={() => window.open(Data.Events[current].link, "_self")}>
            {Data.Events.map((Image, index) => {
              return (
                <div
                  className={index === current ? 'logo ativo' : 'logo'}
                  key={index}>
                  {index === current && (
                    <img src={hover ? Image.pathLogo : Image.pathLogoHover}
                      alt="" className='Imglogo' />)}
                </div>
              );
            })
            }
          </EventLogo>
          <EventImg className='EventoSlide' onClick={() => window.open(Data.Events[current].link, "_self")}>
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
      </div>
    );
  }

}

export default App;
