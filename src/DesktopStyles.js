import styled from "styled-components"

export const Header = styled.div`
    position:fixed;
    top:0;
    width:100%;
    background-color:#000530;
    z-index:11;

`
export const HeaderSocial = styled.div`
    z-index:12;
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
`;