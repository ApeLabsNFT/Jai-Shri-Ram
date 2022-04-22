import React from 'react';
import '../../App.css';
import Cards from "../Cards"
import Timeline2 from '../timeline2';
import Tabs from '../Tabs';
import Footer from '../Footer';
import Parrallax from '../parrallax';
import SlideShow from '../para';
import Featured from '../featured';
function Home()

{
  return(
    <>
    <noscript>Jai Shri Ram NFT, Jaishriram NFT,jaishriram</noscript>
    <Parrallax/>
{/* <Para/> */}
<SlideShow/>
    <Cards/>
    <Timeline2/>
    <Tabs/>
<Featured/>
    <Footer/>

    </>
  )
}
export default Home;