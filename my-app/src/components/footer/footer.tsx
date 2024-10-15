import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import "./Footer.css";

/* Footer Elements
    Contact Information
        Address: Physical location of the school/organization
        Phone Number: For inquiries
        Email Address: General contact email

    Quick Links
        Links to important pages, such as:
            Homepage
            About Us
            Programs
            Admissions
            Get Involved
            Resources
            Contact Us

    Social Media Links
        Icons linking to your organization’s social media profiles (e.g., Facebook, Twitter, Instagram, LinkedIn)

    Newsletter Signup
        Field for visitors to subscribe to updates and newsletters

    Copyright Notice
        A statement indicating copyright ownership (e.g., "© 2024 [Organization Name]. All rights reserved.")
*/

const currentYear = new Date().getUTCFullYear();
library.add(faFacebook, faYoutube);

const PageFooter = () => {
    return (
        <footer className="h-auto bg-slate-800 text-white flex flex-col items-center justify-between p-4 text-xs sm:text-sm md:text-base">
            {/* Address Section */}
            <div className="flex flex-col items-center mx-auto w-full my-1 cursor-default sm:justify-center">
                <FontAwesomeIcon icon={faMapLocationDot} className="h-5 w-5 md:h-6 md:w-6 mb-1 block sm:hidden"/>
                <div className="text-center p-1 w-auto mr-auto ml-auto">
                    <FontAwesomeIcon icon={faMapLocationDot} className="h-5 w-5 md:h-6 md:w-6 m-0 sm:m-auto sm:mr-2 hidden sm:inline-block"/>
                    <b className="ml-0 mr-1">Mittapheap</b> Village,
                    <b className="ml-1 mr-1">Poipet</b> Commune,
                    <b className="ml-0 mr-1 inline">Poipet</b>City,
                    <b className="ml-1 mr-1">Banteay Meanchey</b> Province
                </div>
            </div>
            
            {/* Phone Section */}
            <div className="flex items-center justify-center my-1 cursor-default">
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4 md:h-5 md:w-5 mr-2"/>
                <span className="ml-1">Phone Number: +855 78 581 695</span>
            </div>
            
            {/* Divider */}
            <hr className="border-t-2 border-white my-2 w-4/5 text-center"/>
            
            {/* Quick Links Section */}
            <div className="flex flex-col items-center w-auto my-1 justify-center">
                <span className="flex items-center justify-center">
                    <h4 className="text-s font-bold text-center">Quick Links</h4>
                    <FontAwesomeIcon icon={faLink} className="h-4 w-4 ml-2"/>
                </span>
                <div className="flex flex-wrap justify-center space-x-3 mt-2 underline-animation">
                    <Link href="/" className="text-white">Home</Link>
                    <Link href="/about_us_page" className="text-white">About Us</Link>
                    <Link href="/programs_page" className="text-white">Programs</Link>
                    <Link href="/admission_page" className="text-white">Admission</Link>
                </div>
            </div>
            
            {/* Social Media Section */}
            <div className="flex items-center w-auto my-2 justify-center">
                <h4>Follow our social media!</h4>
                <a href="https://www.youtube.com/channel/UCu8lJrOjfnKtummPuJoGEcg/featured" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className="h-5 w-5 mx-2 rotation-animation cursor-pointer"/>
                </a>
                <a href="https://web.facebook.com/donboscocenterpoipet" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 mx-2 rotation-animation cursor-pointer"/>
                </a>
            </div>
            
            {/* Copyright Section */}
            <div className="flex items-center justify-center mt-3 p-2 w-full md:w-1/2 border-2">
                <h4 className="text-center cursor-default">© {currentYear} Don Bosco Poipet. All rights reserved.</h4>
            </div>
        </footer>
    );
}

export default PageFooter;