import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    // z-index: 10;
    max-width: 190px;
    min-width: 190px;
    max-height: 190px;
    min-height: 190px;
    aspect-ratio: 1/1;
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0px 0px 8px 0px rgb(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    transition: 0.3s;
    &:hover{
        transform : scale(1.05);
        // background: #FFE652;
    }
    &:before{
        content: '';
        width: 100%;
        position: absolute;
        height: 4px;
        background: #FFE652;
        // background: #D06224;
        top: 0;
        right: 0;
    }
`
export const SvgBox = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
`
export const Heading = styled.h1`
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
    // background: green;
`
export const Content = styled.div`
    text-align: center;
    // background: blue; 
    font-size: 14px; 
    line-height: 1rem;
`