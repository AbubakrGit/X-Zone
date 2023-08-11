import React from 'react'

function Footer() {
  return (
    <>
    <footer>
        <div className="footer__main">

            <div className="left">
                <address>

                    <img  className='logo' src="../images/logo.svg" alt="Error" />

                    <div className="box">
                        <img src="../images/location.svg" alt="Error" />
                        <a href="#!">Dhaka, Bangladesh</a>
                    </div>
                    
                    <div className="box">
                        <img src="../images/call.svg" alt="Error" />
                        <a href="tel:+0943833399">0943833399</a>
                    </div>
                    
                    <div className="box">
                        <img src="../images/message.svg" alt="Error" />
                        <a href="email:support@zone.com">support@zone.com</a>
                    </div>


                    <div className="links">
                        <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiRj8aax9SAAxWdGHsKHdFEBIIYABAAGgJsZQ&gclid=Cj0KCQjwuNemBhCBARIsADp74QTYJcSgGPNTIdpORcbX19NMrlfsU-hdmf0psAfDJFfKuiUh3w9k22IaAglkEALw_wcB&ohost=www.google.com&cid=CAESbeD2l3P8ouBs5EFTUMzh-pjNk2xagkNe0K9xdPm6pci5eG_MCAvUulW_moasppBtKmhmco8hfJWb84uGUJWtGDpqRFPabaEAsa4JwFwPJ46hm0CDEYY_55VGelO123arJmtPVDiG6nWz9adgcL4&sig=AOD64_3BYCXpCzgsK3YM9FI2mFDPLdEUWw&q&adurl&ved=2ahUKEwiU47-ax9SAAxWAKRAIHRREDKUQ0Qx6BAgGEAE"><img src="../images/facebook.svg" alt="Error" /></a>
                        <a href="https://twitter.com/?lang=ru"><img src="../images/twitter.svg" alt="Error" /></a>
                        <a href="https://www.instagram.com/"><img src="../images/instagram.svg" alt="Error" /></a>
                        <a href="https://www.pinterest.com/"><img src="../images/pinterest.svg" alt="Error" /></a>
                    </div>
                </address>


                <div className="links">
                    <h5><a href="#!">Service</a></h5>
                    <h6><a href="#!">Order Management</a></h6>
                    <h6><a href="#!">Social Assistant</a></h6>
                    <h6><a href="#!">Crypto Platform</a></h6>
                    <h6><a href="#!">Analyzer of the News</a></h6>
                </div>

            </div>
            <div className="right">


                <div className="box">
                    <h5><a href="#!">Company</a></h5>
                    <h6><a href="#!">About us</a></h6>
                    <h6><a href="#!">News</a></h6>
                    <h6><a href="#!">Our trusted partner</a></h6>
                    <h6><a href="#!">News users FAQ</a></h6>
                </div>
                
                <div className="box">
                    <h5><a href="#!">Supports</a></h5>
                    <h6><a href="#!">Help center</a></h6>
                    <h6><a href="#!">Feedback</a></h6>
                    <h6><a href="#!">Contact us</a></h6>
                    <h6><a href="#!">Terms conditins</a></h6>
                </div>
                
                <div className="box">
                    <h5><a href="#!">Resousers</a></h5>
                    <h6><a href="#!">Dowload</a></h6>
                    <h6><a href="#!">Blog</a></h6>
                    <h6><a href="#!">What's new</a></h6>
                    <h6><a href="#!">Sitemap</a></h6>
                </div>


            </div>



        </div>

            <div className="footer__hr">
                <hr />
            </div>

        <div className="footer__bottom">
            <h6>© 2021 Zone. - All rights reserved.</h6>
            <div className="right">
                <h6><a href="#!">Privacy</a></h6>
                <h6><a href="#!">Security</a></h6>
                <h6><a href="#!">Terms</a></h6>
            </div>
        </div>

    </footer>
    </>
  )
}

export default Footer