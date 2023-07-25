import React, { useState } from 'react'
import './logscr.css'
import  SingnupScreen from './SingnupScreen'
function Loginscr() {
    const[sigin,setSignin] = useState(false);


  return (
    <div className='loginscreen'>
        <div className="loginscreen_background">
        <img className='loginscreen_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
            <button onClick={()=>setSignin(true)} className='loginscreen_button' 
            >Sign in</button>
            <div className="loginscreen_gradient">

            </div>
        </div>
        <div className='loginscreen_body'>
            {
                sigin?(
                    <SingnupScreen></SingnupScreen>
                ):(
                    <>
                    <h1>Unlimited films TV and more...</h1>
                    <h2>Watch anywhere cancel ant anytime</h2>
                    <div className="loginscreen_input">
                        <form >
                            <input type="email" placeholder=' Email address'/>
                            <button className='loginscreen_getstarted' onClick={()=>setSignin(true)}> Get started</button>
                        </form>
                    </div>
        
                </>
                )
            }
       
        </div>
        
    </div>
    
  )
}

export default Loginscr