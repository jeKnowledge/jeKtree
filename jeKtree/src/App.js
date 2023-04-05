import React, { useEffect, useState } from "react";
import { HeaderMobile, ContLinksMobile, LinksMobile, ContFooterMobile, FooterMobile, SocialMobile } from './MobileStyles'
import { Header, HeaderSocial, JekLogo, JekSubTitle, ContLinks, Links } from './DesktopStyles'
import Carousel from "./carousel.js";
import axios from "axios";
import Spinner from "./Spinner";

function App() {
  const BACKENDURL = "https://backendjektree.jeknowledge.com/jektree";

  const [dataTree, setDataTree] = useState({ "Social": [], "Links": [], "Events": [] });
  const [length, setLength] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // add Access-Control-Allow-Origin header to the request

    axios.get(BACKENDURL, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      setDataTree(response.data);
      setLength(response.data.Events.length);
      setLoaded(true);
    }).catch((error) => {
      console.log(error);
      alert("Erro ao carregar os dados");
    });

  };

  const isMobile = window.screen.width < 600

  const [current, setCurrent] = useState(0);

  const proxEvento = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

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

          {loaded ?
            dataTree.Links.map(data => {
              return (
                <div key={data.name}>
                  <LinksMobile onClick={() => window.open(data.link, "_self")} >{data.name} </LinksMobile>
                </div>
              )
            })
            : <Spinner />
          }
        </ContLinksMobile>
        {loaded ? <Carousel data={dataTree} /> : <Spinner />}
        <ContFooterMobile>
          <FooterMobile>
            {
              loaded ?
              dataTree.Social.map(data => {
                return (
                  <div key={data.name}>
                    <SocialMobile><a href={data.link}><img src={data.path} alt={data.name} height={38} width={38} /></a></SocialMobile>
                  </div>
                )
              })
              : <Spinner />
            }
          </FooterMobile>
        </ContFooterMobile>
      </div >
    );
  }

  return (
    <div>
      <Header>
        <HeaderSocial>
          {
            loaded ?
              dataTree.Social.map(data => {
                return (
                  <a style={{ cursor: "pointer" }} key={data.name} href={data.link}><img src={data.path} alt={data.name} height={38} width={38} /></a>
                )
              }) : <Spinner />
          }
        </HeaderSocial>
      </Header>
      <JekLogo><img src="RedesSociais+Jek\\JekLogo.svg" width={100} height={100} alt="" /></JekLogo>
      <JekSubTitle><img src="RedesSociais+Jek\\JekSubTitle.svg" width={175} height={175} alt="" /></JekSubTitle>
      <ContLinks>
        {
          loaded ?
          dataTree.Links.map(data => {
            return (
              <div key={data.name}>
                <Links onClick={() => window.open(data.link, "_self")}>{data.name}</Links>
              </div>
            )
          })
          : <Spinner />
        }
      </ContLinks>
      {loaded ? <Carousel data={dataTree} /> : <Spinner />}
    </div >
  );

}

export default App;
