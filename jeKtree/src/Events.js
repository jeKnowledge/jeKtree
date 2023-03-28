import styled from "styled-components"


export const SubTitle = styled.div`
    margin-top:80px;
    font-family: 'Suisse-Int-Bold';
    color:#EEEEEE;
    padding:3%;
    font-size: 26px;
`

export const Container = styled.div`
    cursor: pointer; 
    position:relative;
    width: 60%;

    &:hover {
        background-color:#EEEEEE;
        -webkit-transition: background-color 500ms linear;
        -ms-transition: background-color 500ms linear;
        transition: background-color 500ms linear;
      } 
    margin: 0 auto;
    background-color:#13234E;
    border-color: #13234E;
    border-style: solid;
    border-width: thin;
    border-radius: 11px;
    
`

export const ContainerLogo = styled.div`
    position:absolute;
    bottom:4.8vh;
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
export const SetaDireita = styled.div`

`
export const SetaEsquerda = styled.div`

`
export const ContainerImg = styled.div`

    overflow:hidden;
    margin: 3% 0;
    object-fit: contain;
    margin-left:19.5%;
    outline: none;
`

export const EventTitle = styled.div`
    margin:65px;
    font-family: 'Suisse-Int-Light';
    color:#EEEEEE;
    font-size:26px;

    
`
export const ContDots = styled.div`
    cursor: pointer; 
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
 `
export const SubTitleMobile = styled.div`
    margin-top:8%;
    font-family: 'Suisse-Int-Bold';
    color:#FFFFFF;
    padding:5%;
    font-size: 120%;
`
export const ContainerMobile = styled.div`
    overflow:hidden;
    position:relative;
    width: 90%;
    background-color:#13234E;
    margin: 0 auto;
    border-color: #13234E;
    border-style: solid;
    border-width: thin;
    border-radius: 11px;

`
export const ContainerLogoMobile = styled.div`
    position:absolute;
    left:5%;
    bottom:7%;

    & .LogoSlide {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
    & .Imglogo {
        max-width: 50px;
        max-height: 50px;
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
export const ContainerImgMobile = styled.div`
    margin: 3% 0;
    width:100%;
    object-fit: contain;
    margin-left:24%;
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

    ;