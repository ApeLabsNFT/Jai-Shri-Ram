import React from 'react';
import '../../App.css';
import Cards from "../Cards"
import Timeline2 from '../timeline2';
import Tabs from '../Tabs';
import Footer from '../Footer';
import Parrallax from '../parrallax';
import SlideShow from '../para';
function Home()

{
  return(
    <>
    <Parrallax/>
{/* <Para/> */}
<SlideShow/>
    <Cards/>
    <Timeline2/>
    <Tabs/>

    <Footer/>

    </>
  )
}
export default Home;