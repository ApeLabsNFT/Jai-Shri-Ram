import React from 'react';
import '../../App.css';
import Signupbg from "../sign-upbg"
import Cards from "../Cards"
import Timeline2 from '../timeline2';
import Token from '../Tokenomics';
import Tabs from '../Tabs';
import Footer from '../Footer';

function Home()

{
  return(
    <>
    <Signupbg />
    <Cards/>
    <Timeline2/>
    <Token/>
    <Tabs/>
    <Footer/>

    </>
  )
}
export default Home;