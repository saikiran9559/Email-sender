import Image from 'next/image'
import Card from './card/card'
import {
    Container1,
    Container,
    MainHeading,
    CardsContainer,
    MessageGetUs,
    MessageUs,
    GetUs,
    ContactHeading,
    TwoDiv,
    Box,
    Label,
    Input,
    Box2,
    Input2, 
    GetUsHeading, 
    Content, 
    SocialMediaContainer, 
    SvgBox,
} from './style'
const Contact = ()=>{
    return(
       <Container>
           <MainHeading>Contact Us</MainHeading>
           <CardsContainer>
               <a  target={'_blank'} href='https://goo.gl/maps/Kcn2sMthg1dqFfDH8'><Card heading = {'Company Location'} svg={'/assets/svg/location-svgrepo-com.svg'} paragraph = {'3rd floor, 12-5-32, St 7, Vijayapuri Colony, Tarnaka, Hyderabad, Telangana 500017'}/></a>
               <a href='tel:6303679126'><Card heading = {'Phone Numbers'} svg={'/assets/svg/phone-svgrepo-com.svg'} paragraph = {'this is paragraph'}/></a>
               <a href='mailto:support@floresinnovative.com'><Card heading = {'Email Us'} svg={'/assets/svg/email-mail-svgrepo-com.svg'} paragraph = {'this is paragraph'}/></a>   
           </CardsContainer>
           <MessageGetUs >
               <MessageUs>
                   <ContactHeading>Send Us Message</ContactHeading>
                   <TwoDiv>
                       <Box>
                           <Label>Name</Label>
                           <Input name='name' ></Input>
                       </Box>
                       <Box>
                           <Label>Email</Label>
                           <Input name='email'></Input>
                       </Box>
                   </TwoDiv>
                   <TwoDiv>
                       <Box>
                           <Label>Phone Number</Label>
                           <Input name='phone' type={'tel'}></Input>
                       </Box>
                       <Box>
                           <Label>Company Name</Label>
                           <Input name=''></Input>
                       </Box>
                   </TwoDiv>
                   <Box2>
                        <Label>Message</Label>
                        <Input2></Input2>
                   </Box2>
               </MessageUs>
               <GetUs>  
                   <GetUsHeading>
                       Get In Touch
                   </GetUsHeading>
                   <Content>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        <br/><br/>
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged
                   </Content>
                   <SocialMediaContainer>
                        <Image style={{cursor: 'pointer'}} src ={'/assets/social media/icons8-facebook.svg'} width={27} height={27} />
                        <Image style={{cursor: 'pointer'}} src ={'/assets/social media/icons8-linkedin.svg'} width={27} height={27}/>
                        <Image style={{cursor: 'pointer'}} src ={'/assets/social media/icons8-whatsapp.svg'} width={27} height={27}/>
                        <Image style={{cursor: 'pointer'}} src ={'/assets/social media/icons8-twitter.svg'} width={27} height={27}/>
                        <Image style={{cursor: 'pointer'}} src ={'/assets/social media/icons8-instagram.svg'} width={27} height={27}/>
                   </SocialMediaContainer>
               </GetUs>
           </MessageGetUs>
       </Container>
    );
}

export default Contact;
