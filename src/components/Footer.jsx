import React from "react"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/edclogo.png"

const Footer = () => {
    return (
        <footer className="bg-[#111111] text-white lg:px-20 px-4 py-20 w-screen">
            <div className="container mx-auto grid lg:grid-cols-5 grid-cols-2 grid-reverse lg:space-x-0 space-x-8">
                    <div className="flex flex-col justify-center items-start lg:col-span-2 pr-4 mb-8 gap-4">
                        <span className="lg:text-[18px] font-bold flex flex-row justify-start items-start">
                            <img src={logo} alt="" className="lg:w-14 lg:h-14 w-10 h-10" />
                            <h1>Entrepreneurship <br /> Development Cell</h1>
                        </span>
                    <p className="lg:text-[16px] my-4">We strive to be at the forefront of technological advancements and industry best practices</p>
                    
                    <div className="flex flex-row gap-3 items-center">
                    <FaFacebook className="w-7 h-7"/>
                    <FaInstagram className="w-7 h-7"/>
                    <FaLinkedin className="w-7 h-7"/>
                    </div>
                    </div>
                    <div className="mb-4 md:mb-0 flex flex-col  gap-4 lg:col-span-1">
                        <h1 className="text-[26px] font-semibold text-white py-2">Quick Links</h1>
                        <div>Dean of RIE</div>
                        <div>Faculty Advisor</div>
                        <div>Hall of Fame</div>
                        <div>Contact Us</div>
                    </div>
                    <div className="mb-4 md:mb-0 flex flex-col  gap-4 lg:col-span-1">
                        <h2 className="text-[26px] font-semibold text-white py-2">Our services</h2>
                        <div>Chemical Research</div>
                        <div>Construction Material</div>
                        <div>Agricultural Engineering</div>
                        <div>Automotive & Systems</div>
                    </div>
                    <div className="mb-4 md:mb-0 flex flex-col  gap-4 lg:col-span-1">
                        <h2 className="text-[26px] font-semibold text-white py-2">Help</h2>
                        <div>Privacy Policy</div>
                        <div>Support</div>
                        <div>Terms & Conditions</div>
                    </div>
            </div>
            <div className="text-center lg:mt-[70px] mt-10">
            Copyright © 2024 EDC, BIT Mesra. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;