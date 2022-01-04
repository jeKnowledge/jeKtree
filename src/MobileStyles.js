
import styled from "styled-components"

export const HeaderMobile = styled.div`
    margin: 10% 0;
`
export const ContLinksMobile = styled.div`
    margin 0 8%;
    width:auto;
    text-align: center; 
    display: flex; 
    flex-direction: column; 

`
export const LinksMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow:auto;
    margin-bottom:2%;
    border-color: #13234E;
    border-style: solid;
    border-width: thin;
    border-radius: 11px;
    background-color:#13234E;
    font-family: 'Suisse-Int-Regular';
    color: #FFFFFF;
    min-height: 4.75vh;
`
export const SubTitleMobile = styled.div`
    margin-top:8%;
    font-family: 'Suisse-Int-Bold';
    color:#FFFFFF;
    padding:5%;
    font-size: 120%;
`
export const ContEventMobile = styled.div`
    position:relative;
    width: 90%;
    background-color:#13234E;
    margin: 0 auto;
    border-color: #13234E;
    border-style: solid;
    border-width: thin;
    border-radius: 11px;
    min-height:20vh;

`
export const EventLogoMobile = styled.div`
    position:absolute;
    left: 1%;
    bottom:2.5%;
    padding: 3%;


    & .LogoSlide {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
    & .Imglogo {
        max-width: 60px;
        max-height: 60px;
      }
      
    & .logo {
        opacity: 0;
        transition-duration: 1s ease;
      }
      
    & .logo.ativo {
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.08);
      }


`
export const EventImgMobile = styled.div`
    & .EventoSlide {
        border-color: #FFFFFF;
        border-style: solid;

      }
      
    & .ImgEvent {
        position:relative;
        max-width: 65vw;
        max-height: 20vh;
        border-radius: 10px;
        padding: 2% 0; 
        padding-top:3%;
        padding-left:15%;
        margin-right:-8%;    
      }
      
    & .Evento {
        opacity: 0;
        transition-duration: 1s ease;
      }
      
    & .Evento.ativo {
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.0);
      }
`
export const EventTitleMobile = styled.div`
    margin:5%;
    font-family: 'Suisse-Int-Light';
    color:#FFFFFF;
    
`
export const ContDotsMobile = styled.div`
    display: inline-flex;
    margin-bottom:130px;
    & .dot{
        width: 5px;
        height: 5px;
        border-radius: 50%;
        border: 2px solid #FFFFFF;
        margin: 0 5px;
        background: #13234E;
    }

    & .dot.active{
        background: #FFFFFF;
    }
 `

export const ContFooterMobile = styled.div`
    position:fixed;
    width:100%;
    z-index:10;
    bottom:0;
`
export const FooterMobile = styled.div`
    z-index:11;
    background-color: #13234E;
    display:flex;
    gap:5%;
    justify-content: center;
`
export const SocialMobile = styled.div`
    padding:25% 0;
    padding-top:50%;
    width: 40%;
    height: 40%;

`
    ;