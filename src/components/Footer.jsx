import React from 'react'
import { useState, useEffect } from 'react';
import "./Footerstyle.css"
export const Footer = () => {
    const ss="2xl"   
    return (
        <>
        
            <div className="footer">
                <div className="top">
                    <div className="topl">
                        <h1>Triphere</h1>
                    </div>
                    <div className="topr">
                        <a href="/">
                        <i class={"fa-brands fa-facebook fa-l"}></i>
                        </a>
                        <a href="/">
                        <i class="fa-brands fa-twitter fa-l"></i>
                        </a>
                        <a href="/">
                        <i class={"fa-brands fa-instagram fa-l"}></i>
                        </a>
                    </div>
                </div>
                <div className="bottom">
                    <div class="link-col  flex">
                        <h3 className='h3'>Product</h3>
                        <a href="#" class="hov-link">Overview</a>
                        <a href="#" class="hov-link">Pricing</a>
                        <a href="#" class="hov-link">UsabilityHub panel</a>
                        <a href="#" class="hov-link">Customers</a>
                        <a href="#" class="hov-link">Status page</a>
                        <a href="#" class="hov-link">Sign up</a>
                    </div>
                    <div class="link-col flex">
                        <h3 className='h3'>Methodologies</h3>
                        <a href="#" class="hov-link">Card sorting</a>
                        <a href="#" class="hov-link">Prototype testing</a>
                        <a href="#" class="hov-link">First click tests</a>
                        <a href="#" class="hov-link">Preference tests</a>
                        <a href="#" class="hov-link">Five second tests</a>
                        <a href="#" class="hov-link">Design surveys</a>
                    </div>
                    <div class="link-col flex">
                        <h3 className='h3'>Resources</h3>
                        <a href="#" class="hov-link">Blog</a>
                        <a href="#" class="hov-link">Examples</a>
                        <a href="#" class="hov-link">Testing guides</a>
                        <a href="#" class="hov-link">Help center</a>
                        <a href="#" class="hov-link">Contact</a>
                        <a href="#" class="hov-link">Careers</a>
                    </div>
        
                </div>
            </div>
        </>
    )
}
