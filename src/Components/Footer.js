import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon
} from 'react-share';

export default function Footer() {
    const url='https://github.com/Rupesh180902'
  return (
    <div className='footer'>
      <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="d-flex">
                    <p>city Vadodara I 104 vallabh Township</p>
                </div>
                <div className="d-flex">
                    <a href="tel:9313289033">+91 9313289033</a>
                </div>
                <div className="d-flex">
                    <p>ry993494787@gmail.com</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-6">
                <div className="row">
                    <div className="col">
                        <a href="#header" className="footer-nav">Home</a>
                        <br />
                        <a href="#aboutme" className="footer-nav">About</a>
                        <br />
                        <a href="#services" className="footer-nav">Services</a>    
                    </div>
                    <div className="col">
                        <a href="#experience" className="footer-nav">Experience</a>
                        <br />
                        <a href="#portfolio" className="footer-nav">Portfolio</a>
                        <br />
                        <a href="#contacts" className="footer-nav">Contacts</a>    
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                <div className="d-flex justify-content-center">
                    <FacebookShareButton 
                    url={url}
                    quote='FullStack Developer'
                    hashtag='#Reactjs'
                    >
                        <FacebookIcon className='mx-3' size={36}/>
                    </FacebookShareButton>


                    <TwitterShareButton 
                    url={url}
                    quote='FullStack Developer'
                    hashtag='#Reactjs'
                    >
                        <TwitterIcon className='mx-3' size={36}/>
                    </TwitterShareButton>

                    <WhatsappShareButton
                    url={url}
                    quote='FullStack Developer'
                    hashtag='#Reactjs'
                    >
                        <WhatsappIcon className='mx-3' size={36}/>
                    </WhatsappShareButton>
                    <LinkedinShareButton
                    url={url}
                    quote='FullStack Developer'
                    hashtag='#Reactjs'
                    >
                        <LinkedinIcon className='mx-3' size={36}/>
                    </LinkedinShareButton>
                    <RedditShareButton 
                    url={""}
                    quote='FullStack Developer'
                    hashtag='#Reactjs'
                    >
                        <RedditIcon className='mx-3' size={36}/>
                    </RedditShareButton>
                </div>
                <p className="pt-3 text-center">
                    Copyright&copy;
                    {new Date().getFullYear()}&nbsp;Live React | All Rights Reserved
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}
