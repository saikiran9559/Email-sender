import Image from 'next/image';
import{
    Container,
    Heading,
    Content,
    Dummy,
    SecondContainer,
    ProfileContainer,
    Box,
    Round,
    Name,
    Quote,
    SocialMediaContainer,
    ProfileAbout,
    Story,
    Para,
} from './style'

const About_Us = ()=>{
    return(
        <>
        <Container>
            <Heading>About Us</Heading>
            <Content>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Content>
        </Container>
        <Dummy> 
            <SecondContainer>
                <ProfileContainer bool={true}>
                    <Box>
                        <Round><Image src={'/profile1.jpg'} width={170} height={170}/></Round>
                        <Name>Mr.Lingaswamy Sir</Name>                   
                        <Quote>" I am a versatile graphic designer who can approach marketing projects from concept to implementation. "</Quote>
                   <SocialMediaContainer>
                        <Image style={{cursor: 'pointer'}} src ={'/assets/sm/icons8-facebook.svg'} width={27} height={27} />
                        <Image style={{cursor: 'pointer'}} src ={'/assets/sm/icons8-linkedin.svg'} width={27} height={27}/>
                        <Image style={{cursor: 'pointer'}} src ={'/assets/sm/icons8-whatsapp.svg'} width={27} height={27}/>
                        <Image style={{cursor: 'pointer'}} src ={'/assets/sm/icons8-twitter.svg'} width={27} height={27}/>
                        <Image style={{cursor: 'pointer'}} src ={'/assets/sm/icons8-instagram.svg'} width={27} height={27}/>
                   </SocialMediaContainer>
                    </Box>
                    <ProfileAbout>
                        <Story>Story</Story>
                        <Para>The Design Blog features carefully selected good works from studios and designers from around the globe. Ornare arcu dui vivamus arcu felis bibendum ut. Consectetur adipiscing elit duis tristique sollicitudin. Volutpat lacus laoreet non curabitur. Magna fringilla urna porttitor rhoncus. Ultricies leo integer malesuada nunc vel risus commodo viverra.</Para>
                    </ProfileAbout>
                </ProfileContainer>
            </SecondContainer>
            <SecondContainer>
                <ProfileContainer bool={false}>
                    <ProfileAbout>
                        <Story>Story</Story>
                        <Para>The Design Blog features carefully selected good works from studios and designers from around the globe. Ornare arcu dui vivamus arcu felis bibendum ut. Consectetur adipiscing elit duis tristique sollicitudin. Volutpat lacus laoreet non curabitur. Magna fringilla urna porttitor rhoncus. Ultricies leo integer malesuada nunc vel risus commodo viverra.</Para>
                    </ProfileAbout>
                    <Box>
                        <Round><Image src={'/profile1.jpg'} width={170} height={170}/></Round>
                        <Name>Mr.Lingaswamy Sir</Name>                   
                        <Quote>" I am a versatile graphic designer who can approach marketing projects from concept to implementation. "</Quote>
                   <SocialMediaContainer>
                        <Image style={{cursor: 'pointer'}} src ={'/assets/sm/icons8-facebook.svg'} width={27} height={27} />
                        <Image style={{cursor: 'pointer'}} src ={'/assets/sm/icons8-linkedin.svg'} width={27} height={27}/>
                        <Image style={{cursor: 'pointer'}} src ={'/assets/sm/icons8-whatsapp.svg'} width={27} height={27}/>
                        <Image style={{cursor: 'pointer'}} src ={'/assets/sm/icons8-twitter.svg'} width={27} height={27}/>
                        <Image style={{cursor: 'pointer'}} src ={'/assets/sm/icons8-instagram.svg'} width={27} height={27}/>
                   </SocialMediaContainer>
                    </Box>
                </ProfileContainer>
            </SecondContainer>
        </Dummy>

        </>
    );
}
export default About_Us;