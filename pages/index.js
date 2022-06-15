
import Navbar from '../components/navbar/navbar';
import Slider from '../components/slider/slider';
import Contact from '../components/contact/contact';
import Products from '../components/product/produtct';
import About_Us from '../components/about us/about_us';
import {useRef, createRef} from 'react'
import {
    Container,
    Pack,
} from '../styles/index.style';


const Home = () => {
  const home = createRef();
    const gotohome= () => {

      console.log("home page")
        window.scrollTo({
            top:home.current.offsetTop,
            behavior: 'smooth',
        })
    }
    const products= createRef();
    const gotoproducts= () => {
      console.log("products page")
        window.scrollTo({
            top:products.current.offsetTop,
            behavior: 'smooth',
        })
    }
    const aboutus= createRef();
    const gotoaboutus= () => {
      console.log("aboutus page")
        window.scrollTo({
            top:aboutus.current.offsetTop,
            behavior: 'smooth',
        })
    }
    const contactus= createRef();
    const gotocontactus= () => {
      console.log("contactus page")
      // contactus.current.scrollIntoView({behaviour:'smooth'})   
    }

  const handleSubmit = async () => {
    // e.preventDefault();

      const res = await fetch("/api/mail", {
        body: JSON.stringify({
          email:'jettisaikiran1430@gmail.com',
          fullname:'saikiran',
          subject:'subject',
          message:'Hello world',
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }
  };
// const scroll2El = elID => {
//     window.scrollTo({
//       top: document.getElementById(elID).offsetTop - 60,
//       behavior: 'smooth',
//     });
//   };

// const onBtnClick = (e) => {
//     e.preventDefault();
//     const goto = e.target.getAttribute('goto');
//     setTimeout(() => {
//       scroll2El(goto);
//     }, 100);
//   }

    return (
        <Container >
            <Navbar gotohome={gotohome} gotoproducts={gotoproducts} gotocontactus={gotocontactus} gotoaboutus={gotoaboutus}/>
            {/* <Navbar onBtnClick={onBtnClick}/> */}
            <Slider />
            <Pack>
              <Products goto="produts"/>
              <About_Us/>
              <Contact id="contactus"/>
                {/* <Products ref={products}/>
                <About_Us ref={aboutus}/>
                <Contact ref={contactus}/> */}
            {/* <button onClick={()=>handleSubmit()}> hello there</button> */}
            </Pack>
        </Container>
    );
}



export default Home;
