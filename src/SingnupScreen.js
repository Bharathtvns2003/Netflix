import React from 'react'
import './signupscreen.css'

function SingnupScreen() {
  return (
    <div className='signupscreen'>
        <form >
            <h1>Sign in</h1>
            <input type="email" placeholder='Email' />
            <br />
            <input type="password" placeholder='password' />
            <br />
            <button type='submit'> Sign in</button>
            <h4>

            </h4>
        </form>
    </div>
  )
}

export default SingnupScreen