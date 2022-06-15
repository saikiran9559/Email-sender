import Image from 'next/image';
import {useRef, useState, useEffect} from 'react';
import{
    Container1,
    Container,
    Heading,
    Product,
    ContentBox,
    ContentHeading,
    Content,
    ImageBox,
    ImageInnerBox,
} from './style'
const Products = ()=>{
    const [boolean1, setBoolean1] = useState(false);
    const [boolean2, setBoolean2] = useState(false);
    const [boolean3, setBoolean3] = useState(false);
    const productRef1= useRef();
    const productRef2= useRef();
    const productRef3= useRef();
    const scrollHandler = () => {
        const details1 = productRef1.current.getBoundingClientRect();
        const details2 = productRef2.current.getBoundingClientRect();
        const details3 = productRef3.current.getBoundingClientRect();
        if(window.innerHeight> details1.y + details1.height * 2/3)
            setBoolean1(true);
        else
            setBoolean1(false);

        if(window.innerHeight> details2.y + details2.height * 2/3)
            setBoolean2(true);
        else
            setBoolean2(false);

        if(window.innerHeight> details3.y + details3.height * 2/3)
            setBoolean3(true);
        else
            setBoolean3(false);
        
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, []);

    return(
        <Container1>
            <Heading>Our Products</Heading>
        <Container>
            <Product ref={productRef1} bool = {boolean1}>
                <ImageBox bool={boolean1}>
                    <Image src={'/healthcare.jpg'} alt ='1' width={400} height={400} />
                </ImageBox>
                <ContentBox bool={boolean1}>
                    <ContentHeading>Health care</ContentHeading>
                    <Content>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        essentially unchanged.
                    </Content>
                </ContentBox>
            </Product>

            <Product ref={productRef2} bool={boolean2}>
                <ImageBox bool={boolean2}>
                <Image src={'/analytics.jpg'} alt ='1' width={400} height={400} />
            </ImageBox>
                <ContentBox bool={boolean2}>
                    <ContentHeading>Analytics</ContentHeading>
                    <Content>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        essentially unchanged.
                    </Content>
                </ContentBox>
            </Product>

            <Product ref={productRef3} bool={boolean3}>
                <ImageBox bool={boolean3}>
                <Image src={'/tourism.jpg'} alt ='1' width={400} height={400} />
            </ImageBox>
                <ContentBox bool={boolean3}>
                    <ContentHeading>Tourism</ContentHeading>
                    <Content >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        essentially unchanged.
                    </Content>
                </ContentBox>
            </Product>
        </Container>
        </Container1>
    );
}
export default Products;