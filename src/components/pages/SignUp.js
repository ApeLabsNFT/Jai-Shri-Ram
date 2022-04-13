import React from 'react';
import '../../App.css';
import Signupbg from "../../components/sign-upbg"
import Cards from "../../components/Cards"
import Timeline2 from '../timeline2';
import Token from '../Tokenomics';
import Tabs from '../Tabs';
import Footer from '../Footer';

function SignUp()

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
export default SignUp;