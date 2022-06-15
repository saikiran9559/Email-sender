import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'


import {
    Container,
    LogoTitle,
    Logo,
    Title,
    ButtonsContainer,
    CrossContainer,
    CrossButton,
    Button,
} from './style.js'

const Navbar = ({...props}) => {
    const [sideNav,setsideNav] = useState(false);
    const [navbackground, setNavBackground] = useState(false); 
    const [nav, setNav] = useState(false);
    const getsize = () => {
        return window.innerWidth;
    }
    const handleResize = () => {
        if (getsize() < 890) {
            console.log(true)
            setNav(true);
        }
        else {
            console.log(false)
            setNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('hello world');
        return () => {
            window.removeEventListener('resize', handleResize)
        }
        
    }, [])
    useEffect(()=>{
       const changeColor = ()=>{
           if(window.scrollY >=10)
                setNavBackground(true)
            else 
                setNavBackground(false)
       } 
       window.addEventListener('scroll',changeColor);
       return ()=> window.removeEventListener('scroll', changeColor);
    },[])
    return (
        <Container background = {navbackground}>
            <LogoTitle>
                <Logo>Logo </Logo>
                <Title> Flores Innovative Solutions </Title>
            </LogoTitle>
            {nav && <Image style={{cursor: 'pointer'}} src={navbackground?'/blackmenu.svg':'/whitemenu.svg'} onClick={()=>setsideNav(!sideNav)} height={30} width={30}/>}
            <ButtonsContainer sideNav = {sideNav}>
                {nav && <CrossContainer><Image onClick={()=>setsideNav(!sideNav)} style={{cursor: 'pointer'}} src={'/cross.svg'} width={30} height={30}/></CrossContainer>}
                <Button onClick={()=>props.gotohome()}>Home </Button>
                <Button onClick={()=>props.products()}>Product</Button>
                <Button onClick={()=>props.gotoaboutus()}>About Us</Button>
                <Link href="#contactus"><Button onClick={()=>props.gotocontactus()}>Contact Us</Button></Link>
            </ButtonsContainer>
        </Container>
    );
}

export default Navbar;
