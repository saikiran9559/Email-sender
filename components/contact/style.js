import styled from 'styled-components';
export const Container = styled.div`
    /* background-color: #2C3333; */
    max-width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* &:before{
        z-index: -1;
        position: absolute ;
        height: 70vh;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        // background: #8bbabb;
        background: linear-gradient(  #71DFE7,    #C2FFF9);
    } */
`
export const MainHeading = styled.div`
    font-family: Georgia, serif !important;
    font-size: 3rem;
    padding: 30px 0px;
    text-align: center;
`
export const CardsContainer = styled.div`
    z-index: 2;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    padding: 40px 10%;
    justify-content: center;
    gap: 40px;
    @media (max-width: 710px){
        flex-direction: column;
    }

`
export const MessageGetUs = styled.div`
    max-width: 100%;
    margin: 20px 50px;
    display: flex;
    flex-direction: row;
    background: white;
    align-items: stretch;
    box-shadow: 0px 0px 5px 0px rgba(0, 0 , 0, 0.5);
    @media (max-width: 1025px){
        flex-direction: column;
    }
`
export const MessageUs = styled.div`
    width: 60%;
    padding: 40px;
    @media (max-width: 1025px){
        width: 100%;
    }
`
export const GetUs = styled.div`
    width: 40%;
    // background-color: #35477d;
    background: #009DAE;
    padding: 40px;
    @media (max-width: 1025px){
        width: 100%;
    }
`
export const ContactHeading = styled.h3`
    font-size: 20px;
    font-weight: 100;
    margin-bottom: 30px;
`
export const TwoDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // flex-grow: 1;
    // margin-right: 15px;
    // margin-left: 15px;
    @media (max-width: 630px){
        flex-direction: column;
    }
`
export const Box = styled.div`
    width: 45%;
    margin-bottom: 3rem !important;
    // margin-right: 20px;
    // background: blue;
    @media (max-width: 630px){
        width: 90%;
    }
`
export const Label = styled.div`
    font-size: 14px;
    color: #b3b3b3;
    margin-bottom:  10px ;
    // display: inline-block;
    // padding: 0;
    // pointer-events: none;
`
export const Input = styled.input`
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    background: none;
    transition: 0.3s;
    &:focus{
        border-bottom: 1px solid #000;
    }
`
export const Box2 = styled.div`
    width: 100%;
    margin-bottom: 3rem !important;
`
export const Input2 = styled.textarea`
    width: 100%;
    height: 100px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    background: none;
    transition: 0.6s;
    &:focus{
        border-bottom: 1px solid #000;
    }
`
export const GetUsHeading = styled(ContactHeading)`
    color: white;
`
export const Content = styled.p`
    color: white;
    font-size: 15px;
    font-weight: lighter !important;
    letter-spacing: 0.3px;
    line-height: 1.3rem;
`
export const SocialMediaContainer = styled.div`
    margin: 30px 0px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content:start;
`
export const SvgBox = styled.div`
    
`