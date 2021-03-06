import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
`
export const Slider = styled.div`
	position: relative;
	width: 100%;
    height: 100vh;
	background: #2c3e50; /* darckblue */
`
const fade = keyframes`
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 1;
        transform: scale(1.05);
    }
`
export const MySlide = styled.div`
    position: relative;
    width: 100%;
	height: 100%;
    overflow: hidden;
    display: ${props => props.displays};
`
// export const Fade = styled(MySlide)`
//     animation - name: ${fade};
//     animation - duration: 1.5s;
//     animation - name: fade;
//     animation - duration: 1.5s;
//     display: ${props => props.displays};
// `
export const ImageBox = styled.div`
    width: 100%;
    height: 100vh;
    transform: scale(1.02);
    animation-name: ${fade};
    animation-duration: 5s;
    &:after{
        z-index: 1;
        content: '';
        position: absolute;
        background: rgba(0,0,0,0.7);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
`
const posi = keyframes`
    from {left: 25%;}
    to {left: 15%;}
`
export const Text = styled.div`
    position: absolute;
    color: #fff;
    letter-spacing: 2px;
    line-height: 35px;
    top: 40%;
    left: 15% ;
    animation-name:${posi};
    animation-duration: 4s;
    z-index: 3 !important;
`
export const Heading = styled.h1`
    /* color: #00a7ff; */
    color:white;
    font-weight: bolder;
    font-size: 30px;
    margin-bottom: 20px;
    position: relative;
`
export const Para = styled.p`
    /* font-weight:lighter; */
    /* font-family: 'Courier New', Courier, monospace; */
    font-size: 20px;
    font-weight: 100;
    letter-spacing: 0.2rem;
`
export const SlideButton = styled.a`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 50px;
    padding: 15px;
    cursor: pointer;
    color: #fff;
    transition: 0.1s;
    user-select: none;
    z-index: 5;
    &:hover{
        color: #00a7ff; /* blue */
    }
`
export const PrevButton = styled(SlideButton)`
    left: 0;
    z-index: 100;
    display: none;
`
export const NextButton = styled(SlideButton)`
    right: 0;
    z-index: 100;
    display: none;
`
