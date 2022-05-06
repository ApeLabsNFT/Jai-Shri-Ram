import React from 'react';
import '../../App.css';
import Cards from "../Cards"
import Tabs from '../Tabs';
import Footer from '../Footer';
import Parrallax from '../parrallax';
import SlideShow from '../para';
import Featured from '../featured';
import Insights from '../insights';
import Naman from '../naman';
import Roadmap from '../roadmap';

function Home()

{
  return(
    <>
    <noscript>Jai Shri Ram NFT, Jaishriram NFT,jaishriram</noscript>
    <Parrallax/>
{/* <Para/> */}
<SlideShow/>
<Naman/>
<Cards/>
<Insights/>
<Roadmap/>
    <Tabs/>
<Featured/>
    <Footer/>


    </>
  )
}
export default Home;