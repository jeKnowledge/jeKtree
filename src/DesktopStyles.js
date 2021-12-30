import styled from "styled-components"

export const Header = styled.div`
    position:fixed;
    top:0;
    width:100%;
    background-color:#000530;
    z-index:10;

`
export const HeaderSocial = styled.div`
    z-index:11;
    display: flex;
    padding-right:50px;
    margin: 15px 0;
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
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow:auto;
    margin-bottom:1.5%;
    border-color: #13234E;
    border-style: solid;
    border-width: thin;
    border-radius: 11px;
    background-color:#13234E;
    font-family: 'Suisse-Int-Regular';
    font-size:24px;
    color: #EEEEEE;
    min-height: 50px;

    &:hover {
        background-color:#EEEEEE;
        color: #13234E;
      }
`
export const SubTitle = styled.div`
    margin-top:80px;
    font-family: 'Suisse-Int-Bold';
    color:#EEEEEE;
    padding:3%;
    font-size: 26px;
`
export const ContEvent = styled.div`
    cursor: pointer;
    position:relative;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    min-height:60vh;
    background-color:#13234E;
    margin: 0 auto;
    border-color: #13234E;
    border-style: solid;
    border-width: thin;
    border-radius: 11px;
    &:hover {
        background-color:#EEEEEE;
      } 
    @media(max-width: 1400px) {
        min-height:20vh;
    }
    
`
export const EventLogo = styled.div`
    cursor: pointer;
    position:absolute;
    bottom:5.5vh;
    @media(max-width: 1400px) {
        bottom:1.5vh;
    }
    
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
    cursor: pointer;
    object-fit: contain;
    position: relative;
    margin:3% 0;
    
    & .EventoSlide {
        border-color: #EEEEEE;
        border-style: solid;
        margin:5%;
      }
      
    & .ImgEvent {
        border-radius: 10px;
        width: 45vw;
        height: auto;
        margin-right:-20%;

           
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