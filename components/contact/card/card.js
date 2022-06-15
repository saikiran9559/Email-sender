import Image from 'next/image';
import {
    Container,
    SvgBox,
    Heading,
    Content,
} from './style'

// import Location from '/assets/svg/address-svgrepo-com.svg'

const Card =(props)=>{
    return (
        <Container>
            <SvgBox><Image src={props.svg} alt='src' objectFit='cover' layout='fill' /></SvgBox>
            <Heading>{props.heading}</Heading>
            <Content>{props.paragraph}</Content>
        </Container>
    );
}
export default Card;