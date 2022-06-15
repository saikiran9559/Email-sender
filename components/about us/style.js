import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    /* background-color: #f2f2f2; */
    height: 100vh;
    color:black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

export const Heading = styled.h4`
    font-family: Georgia, serif !important;
    font-size: 3rem;
    margin: 30px 0px;
    text-align: center;
`
export const Content = styled.p`
    font-size: 1rem;
    font-family: 'Open Sans',sans-serif;
    padding: 10%;
    line-height: 2.3rem;
    text-align: center;
`
export const Dummy = styled.div`
    /* background-color: #C39FCF; */
    /* background-color: #FFD87C; */
    /* background-color: #9FB7CF; */
    width: 100%;
    /* background-color: white; */
    padding: 60px 0px;
`
export const SecondContainer= styled.div`
    margin: 50px auto;
    width: 90%;
    /* border: 0.1px solid black; */
    padding-bottom: 80px;
`
export const ProfileContainer = styled.div`
    margin-top:10rem;
    /* margin-inline: auto; */
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0px 20px;
    justify-content: center;
    @media (max-width: 860px){
        flex-direction: ${props=>props.bool ? 'column':'column-reverse'};
        align-items: center;
    }
`
export const Box = styled.div`
    background-color: #f2f2f2;
    /* background-color: #9A0680; */
    width: 400px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 120px;
    /* padding-inline: 10px; */
    
    @media (max-width: 500px){
        width: 90%;
    }
`
export const Name = styled.h3`
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 700;
    margin: 24px auto 0;
    font-family: Georgia, serif !important;
    text-align: center;
`
export const Quote= styled.p`
    padding: 0px 30px;
    text-align: center;
    font-style: italic;
`
export const SocialMediaContainer = styled.div`
    margin: 30px 0px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content:center;
`
export const Round = styled.div` 
    position: relative;
    filter: grayscale(80%);
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    z-index: 3;
    top: -85px;
    left: calc(50% - 85px);
    overflow: hidden;
`
export const ProfileAbout = styled.div`
    width: 50%;
    padding: 30px;
    @media (max-width: 860px){
        width: 100%;
    }
`
export const Story = styled(Heading)`
    margin: 0px;   
    @media (max-width: 860px){
        font-size: 2rem;
        text-align: center;
    }
`

export const Para = styled.p`
    margin-top: 19px;
    font-size: 1rem;
    margin-bottom: 0;
    line-height: 2rem;
    /* color: #999999 !important; */
    font-family: 'Open Sans',sans-serif;
    text-align: center;
`