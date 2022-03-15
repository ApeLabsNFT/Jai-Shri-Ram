import React from 'react';
import '../../App.css';
import Signupbg from "../../components/sign-upbg"
import Cards from "../../components/Cards"
import Timeline from '../Timeline';
import Token from '../Tokenomics';
import Tabs from '../Tabs';
function SignUp()

{
  return(
    <>
    <Signupbg />
    <Cards/>
    <Timeline/>
    <Token/>
    <Tabs/>
    </>
  )
}
export default SignUp;