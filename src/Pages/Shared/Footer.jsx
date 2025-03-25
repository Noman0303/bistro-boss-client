import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full h-96'>
            <div className="grid grid-cols-2 w-full gap-0">
                <div className='bg-[#1F2937] text-[#FFF] py-20 text-center  w-full '>
                    <h1 className='text-3xl font-medium mb-4 '>CONTACT US</h1>
                    <p className='mx-auto '>
                        123 ABS Street, Uni 21, Bangladesh <br />
                        +88 123456789 <br />
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00
                    </p>
                </div>
                <div className='bg-[#111827] text-[#FFF]  w-full text-center'>
                    <h2 className="text-3xl mt-24 mb-4">Follow US</h2>
                    <p className='mb-5'>Join us on social media</p>
                    <div className="flex justify-center gap-8">
                        <a href=""><FaFacebookF className='h-9 w-9' /></a>
                        <a href=""><FaInstagram className='h-9 w-9'/></a>
                        <a href=""><FaTwitter className='h-9 w-9'/></a>
                    </div>
                </div>
            </div>

            <footer className="footer sm:footer-horizontal footer-center bg-[#151515] text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} CulinaryCloud. All rights reserved.</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer