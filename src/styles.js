
import styled from "styled-components"

export const Header = styled.div`
    margin: 10% 0;
`
export const ContLinks = styled.div`
    margin 0 8%;
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
    margin-bottom:2%;
    border-color: #13234E;
    border-style: solid;
    border-width: thin;
    border-radius: 13px;
    background-color:#13234E;
    font-family: 'Suisse-Int-Thin';
    color: #FFFFFF;
    min-height: 4.75vh;
`
export const SubTitle = styled.div`
    margin-top:8%;
    font-family: 'Suisse-Int-Medium';
    color:#FFFFFF;
    padding:5%;
    font-size: 120%;
`
export const ContEvent = styled.div`
    position:relative;
    width: 90%;
    background-color:#13234E;
    margin: 0 auto;
    border-color: #13234E;
    border-style: solid;
    border-width: thin;
    border-radius: 13px;
    
    
`
export const EventLogo = styled.div`
    position:absolute;
    left: 2%;
    bottom: 10%;
    padding: 2%;

    & .sliderL {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
    & .imageL {
        width: 100%;
        height: 100%;
      }
      
    & .slideL {
        opacity: 0;
        transition-duration: 1s ease;
      }
      
    & .slide.activeL {
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.08);
      }


`
export const EventImg = styled.div`
    & .slider {
        border-color: #FFFFFF;
        border-style: solid;

      }
      
    & .image {
        position:relative;
        max-width: 65vw;
        max-height: 20vh;
        border-radius: 10px;
        padding: 2% 0; 
        padding-top:3%;
        padding-left:15%;
        margin-right:-8%;    
      }
      
    & .right-arrow {
        position: absolute;
        top: 50%;
        right: 32px;
        font-size: 3rem;
        color: #000;
        z-index: 10;
        cursor: pointer;
        user-select: none;
      }
    & .slide {
        opacity: 0;
        transition-duration: 1s ease;
      }
      
    & .slide.active {
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.0);
      }
`
export const EventTitle = styled.div`
    margin:5%;
    font-family: 'Suisse-Int-Thin';
    color:#FFFFFF;
    
`
export const ContDots = styled.div`
    display: inline-flex;
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
export const Footer = styled.div`
    margin-top:10%;
    background-color: #13234E;
    display:flex;
    gap:5%;
    justify-content: center;
`
export const Social = styled.div`
    padding:25% 0;
    padding-top:50%;
    width: 40%;
    height: 40%;

`
    ;