import React, { useEffect, useState } from "react";
import { HeaderMobile, ContLinksMobile, LinksMobile, ContFooterMobile, FooterMobile, SocialMobile } from './MobileStyles'
import { Header, HeaderSocial, JekLogo, JekSubTitle, ContLinks, Links } from './DesktopStyles'
import Carousel from "./carousel.js";
import axios from "axios";

function App() {

  const BACKENDURL = "http://localhost:8000/jektree/";

  const [dataTree, setDataTree] = useState({"Social": [], "Links": [], "Events": []});
  const [length, setLength] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

      getData();

  }, []);

  const getData = async () => {

    const getData = await axios.get(BACKENDURL);
    axios
      .all([getData])
      .then(
      axios.spread((...allData) => {
        const allDataAPI = (allData[0].data);

        setDataTree(allDataAPI);
        setLength(allDataAPI.Events.length);
        setLoaded(true);
      })
    )
  };

  const isMobile = window.screen.width < 600

  const [current, setCurrent] = useState(0);
  
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
            dataTree.Links.map(data => {
              return (
                <div key={data.name}>
                  <LinksMobile onClick={() => window.open(data.link, "_self")} >{data.name} </LinksMobile>
                </div>
              )
            })
          }
        </ContLinksMobile>
         {loaded ? <Carousel data={dataTree}/> : <p>Loading...</p>}
        <ContFooterMobile>
          <FooterMobile>
            {
              dataTree.Social.map(data => {
                return (
                  <div key={data.name}>
                    <SocialMobile><a href={data.link}><img src={data.path} alt={data.name} height={38} width={38} /></a></SocialMobile>
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
              dataTree.Social.map(data => {
                return (
                  <a style={{ cursor: "pointer" }} key={data.name} href={data.link}><img src={data.path} alt={data.name} height={38} width={38} /></a>
                )
              })
            }
          </HeaderSocial>
        </Header>
        <JekLogo><img src="RedesSociais+Jek\\JekLogo.svg" width={100} height={100} alt="" /></JekLogo>
        <JekSubTitle><img src="RedesSociais+Jek\\JekSubTitle.svg" width={175} height={175} alt="" /></JekSubTitle>
        <ContLinks>
          {

            dataTree.Links.map(data => {
              return (
                <div key={data.name}>
                  <Links onClick={() => window.open(data.link, "_self")}>{data.name}</Links>
                </div>
              )
            })
          }
        </ContLinks>
        {loaded ? <Carousel data={dataTree}/> : <p>Loading...</p>}
      </div >
    );
  }

}

export default App;
