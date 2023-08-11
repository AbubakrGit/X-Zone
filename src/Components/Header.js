import React from 'react'

function Header() {
  return (
    <>
        <header>
          <img src="../images/logo.svg" alt="Error" />


          <div className="links">
            
          <a href="#!">Home</a>
          <a href="#!">About us</a>
          <a href="#!">Service</a>
          <a href="#!">Pricing</a>
          <a href="#!">Blog</a>
          
          <button><a href="#!">Contact Us</a></button>
          
          </div>

        </header>


        <main>

          <div className="left">
                <h1>Virtual Reality Business Solutions</h1>
                <h2>We have over 15 year exprience in business consultting arena. We have over 15 year exprience in business consultting arena and artficial intelligence.</h2>
                <div className="join__us">
                  <button><a href="#!">Join Us</a></button>
                  <img src="../images/pause.svg" alt="Error"></img>
                  <span>
                      <p>Watch video</p>
                    </span>
                </div>
          </div>

          <div className="right">
                <img src="../images/man1.png" alt="Error" />
          </div>

        </main>
    </>
  )
}

export default Header