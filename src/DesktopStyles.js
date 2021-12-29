import styled from "styled-components"

export const Header = styled.div`
    position:fixed;
    top:0;
    width:100%;
    background-color:#000530;

`
export const HeaderSocial = styled.div`
    display: flex;
    padding-right:50px;
    margin: 25px 0;
    gap:30px;
    justify-content: flex-end;
`

export const JekLogo = styled.div`
    margin-top:125px;
`
export const JekSubTitle = styled.div`
    margin-top:-40px;
`
export const ContLinks = styled.div`
    margin 0 20%;
    width:auto;
    text-align: center; 
    display: flex; 
    flex-direction: column; 

`
export const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow:auto;
    margin-bottom:1%;
    border-color: #13234E;
    border-style: solid;
    border-width: thin;
    border-radius: 11px;
    background-color:#13234E;
    font-family: 'Suisse-Int-Regular';
    font-size:24px;
    color: #EEEEEE;
    min-height: 55px;

    &:hover {
        background-color:#EEEEEE;
        color: #13234E;
      }
`
export const SubTitle = styled.div`
    margin-top:30px;
    font-family: 'Suisse-Int-Bold';
    color:#EEEEEE;
    padding:3%;
    font-size: 26px;
`
export const ContEvent = styled.div`
    position:relative;
    width: 60%;
    background-color:#13234E;
    margin: 0 auto;
    border-color: #13234E;
    border-style: solid;
    border-width: thin;
    border-radius: 11px;
    &:hover {
        background-color:#EEEEEE;
      } 
    
`
export const EventLogo = styled.div`
    position:absolute;
    bottom:3vh;
    left:4.5%;

    & .LogoSlide {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
    & .Imglogo {
        width: 7vw;
        height: auto;
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
export const EventImg = styled.div`
    object-fit: contain;
    & .EventoSlide {
        border-color: #EEEEEE;
        border-style: solid;
        margin:5%;
      }
      
    & .ImgEvent {
        position:relative;
        border-radius: 10px;
        width: 45vw;
        height:auto;
        margin:2% 0;
        margin-top:3%;
        margin-right:-15%;    
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
export const EventTitle = styled.div`
    margin:65px;
    font-family: 'Suisse-Int-Light';
    color:#EEEEEE;
    font-size:26px;

    
`
export const ContDots = styled.div`
    display: inline-flex;
    margin-top:5px;
    margin-bottom:200px;
    & .dot{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid #EEEEEE;
        margin: 0 13px;
        background: #13234E;
    }

    & .dot.active{
        background: #EEEEEE;
    }
 `;