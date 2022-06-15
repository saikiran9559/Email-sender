import styled,{css} from 'styled-components'

export const Container = styled.div`
    z-index: 10;
    position:absolute;
    padding: 20px 10%;
    /* color:${props => props.background? 'black': 'white'};; */
    color: white;
    width: 100%;
    /* background-color: ${props => props.background? css`rgba(255,255,255,1)`: css`rgba(0,0,0,0.2)`}; */
    background-color: rgba(0,0,0,0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* box-shadow:${props => props.background? css` rgb(220 220 220) 0px 2px 10px;`: 'none'}; */
    box-shadow: none;
    transition: 0.45s;
    align-items: center;
    top: 0px;
    left: 0px;
`
export const LogoTitle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`
export const Logo = styled.div`
    background-color: #cccccc;
    cursor: pointer;
    color: black;
`
export const Title = styled.div`
    cursor: pointer;
    &:hover ~ ${Logo}{ color: blue;
    }
`
export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    transition: 0.2s;
    overflow: hidden;
    @media (max-width: 890px){
        align-items: center;
        color: black;
        background-color: white;
        height: 100vh;
        width: ${props=> props.sideNav?'100%':'0%'};
        position: fixed;
        top: 0px;
        right: 0px;
        flex-direction: column;
    }
`
export const CrossContainer = styled.div`
    max-width: 100%;
    min-width: 95%;
    display: flex;
    justify-content: end;
    padding: 20px;
`
export const CrossButton = styled.div`
`
export const Button = styled.div`
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-out;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items:left;
    overflow: hidden;
    &:hover{
        color:#EC994B;
    }
`
export const Layer = styled.div`
    position: absolute;
    background-color:#FFD24C;
    width: 100%;
    left: -100%;
    bottom: 0px;
    height: 10%;
    transition: all 0.2s ease-in;
    z-index: -1;
`


