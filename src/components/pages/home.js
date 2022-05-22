import React from 'react';
import '../../App.css';
import Tabs from '../Tabs';
import Footer from '../Footer';
import Parrallax from '../parrallax';
import SlideShow from '../para';
import Featured from '../featured';
import Insights from '../insights';
import Naman from '../naman';
import Roadmap from '../roadmap';
import Aim from '../Cards';

function Home()

{
  return(
    <>
    <noscript>Jai Shri Ram NFT, Jaishriram NFT,jaishriram</noscript>
    <Parrallax/>
{/* <Para/> */}
<SlideShow/>
<Naman/>
<Aim/>
<Insights/>
<Roadmap/>
    <Tabs/>
<Featured/>
    <Footer/>


    </>
  )
}
export default Home;