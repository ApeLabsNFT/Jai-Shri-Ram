import React from 'react';
import '../../App.css';
import Signupbg from "../sign-upbg"
import Cards from "../Cards"
import Timeline2 from '../timeline2';
import Token from '../Tokenomics';
import Tabs from '../Tabs';
import Footer from '../Footer';
import Parrallax from '../parrallax';
function Home()

{
  return(
    <>
    <Parrallax/>
   
    <Cards/>
    <Timeline2/>
    <Tabs/>

    <Footer/>

    </>
  )
}
export default Home;