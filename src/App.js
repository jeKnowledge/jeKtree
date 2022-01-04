import React, { useEffect, useState } from "react";
import Data from './data.json'
import { HeaderMobile, ContLinksMobile, LinksMobile, SubTitleMobile, ContEventMobile, EventLogoMobile, EventImgMobile, ContFooterMobile, FooterMobile, SocialMobile, ContDotsMobile, EventTitleMobile } from './MobileStyles'
import { Header, HeaderSocial, JekLogo, JekSubTitle, ContLinks, Links, SubTitle } from './DesktopStyles'
import Carousel from "./carousel.js";

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
        <Carousel />
        <ContFooterMobile>
          <FooterMobile>
            {
              Data.Social.map(data => {
                return (
                  <div key={data.name}>
                    <SocialMobile><a href={data.link}><img src={data.path} alt={data.name} /></a></SocialMobile>
                  </div>
                )
              })
            }
          </FooterMobile>
        </ContFooterMobile>
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
                  <a style={{ cursor: "pointer" }} key={data.name} href={data.link}><img src={data.path} alt={data.name} /></a>
                )
              })
            }
          </HeaderSocial>
        </Header>
        <JekLogo><img src="RedesSociais+Jek\\JekLogo.svg" width={100} height={100} alt="" /></JekLogo>
        <JekSubTitle><img src="RedesSociais+Jek\\JekSubTitle.svg" width={175} height={175} alt="" /></JekSubTitle>

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
        <Carousel />
      </div >
    );
  }

}

export default App;
