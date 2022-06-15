import styled, {keyframes} from 'styled-components';

export const Container1 = styled.div`
    position: relative;
    /* z-index: 2; */
    width: 100%;
    /* background-color: #F2EBE9; */
    /* background-color: #222; */
`

export const Container = styled.div`
    /* max-width: 100%; */
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap:70px;
    overflow: hidden;
    @media (max-width:1000px ){
        /* flex-direction: row; */
    }
`
export const Heading = styled.div`
    font-family: Georgia, serif !important;
    font-size: 3rem;
    padding: 30px 0px;
    text-align: center;
    color: black;
`
const anime = keyframes`
    from{
        opacity: 0;
        transform: translateX(-20%);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`
export const Product = styled.div`
    margin: auto;
    display: flex;
    max-width: 70%;
    flex-direction:row;
    border-radius: 3px;
    box-shadow: ${props=>props.bool? '0px 0px 3px 0px': ''};
    transition-delay: 0s;
    transition: all 0.4s;
    animation-delay: 0.3s;
    animation-duration: 0.3s;
    overflow: hidden;
    &:hover{
        /* box-shadow: ${props=> props.bool? '0px 0px 15px 0px grey': ''}; */
    }
    @media (max-width: 1000px){
        max-width: '';
        flex-direction: column;
        max-width: 300px;
        min-width: 300px;
    }
`
const boxanimme = keyframes`
    from{
        transform: translateX();
    }
`
export const ContentBox = styled.div`
    opacity: ${props=>props.bool ? '1': '0'};
    /* background-color: #f3f3f3; */
    padding: 30px;
    /* transform : translateX(30%); */
    transform: ${props=> props.bool ? 'translateX(0%)': 'translateX(30%)'};
    transition: .3s;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* animation-name: ${props=>props.bool? imageanime : ''}; */
    /* animation-duration: 0.3s; */
`
export const ContentHeading = styled.div`
    font-family: Georgia, serif !important;
    font-size: 2.5rem;
    /* padding: 10px 0px; */
    text-align: center;
`
export const Content = styled.p`
    font-family: Georgia, serif !important;
    line-height: 2rem;
    text-align: center;
`
export const ImageInnerBox = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
`
export const ImageBox = styled.div`
    opacity: ${props=>props.bool ? '1': '0'};
    /* animation-name: ${props=>props.bool? imageanime : ''}; */
    /* animation-duration: 0.3s; */
    transform: ${props=> props.bool ? 'translateX(0%)': 'translateX(-30%)'};
    transition: .3s;
    min-width: 300px;
    height: 300px;
    position: relative;
    overflow: hidden;
    &:before{
        content: '';
        width: 100%;
        height: calc(100% - 0px);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: rgba(0,0,0,0.3);
   }
`
