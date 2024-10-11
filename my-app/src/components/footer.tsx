import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "../app/globals.css";

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

const PageFooter = () => {
    return (
        <footer className="sm:h-80 bg-slate-800 text-white flex flex-col items-center justify-between p-4 text-sm">
            <div className="flex items-center w-auto my-0 justify-center mb-0 cursor-default">
                <FontAwesomeIcon icon={faMapPin} className="h-5 w-5 mr-2"/>
                <b className="ml-1 mr-1">Mittapheap</b>Village,
                <b className="ml-1 mr-1">Poipet</b>Commune, 
                <b className="ml-1 mr-1">Poipet</b> City,
                <b className="ml-1 mr-1">Banteay Meanchey</b>Province
            </div>
            <div className="flex items-center w-auto my-0 justify-center cursor-default">
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mr-2"/>
                <span className="ml-1">Phone Number: +855 78 581 695</span>
            </div>
            <hr className="border-t-4 border-white my-0 w-4/5 text-center"/>
            <span className="flex items-center w-auto my-0 justify-center cursor-default">
                <h4 className="text-sm font-bold text-center">Quick Links</h4>
                <FontAwesomeIcon icon={faLink} className="h-5 w-5 ml-2"/>
            </span>
            <div className="flex items-center w-auto my-0 justify-center">
                <div className="flex flex-wrap justify-center space-x-3">
                    <a href="/" className="underline-animation text-white">Home</a>
                    <a href="/about" className="underline-animation text-white">About Us</a>
                    <a href="/programs" className="underline-animation text-white">Programs</a>
                    <a href="/admission" className="underline-animation text-white">Admission</a>
                </div>
            </div>
            <hr className="border-t border-gray-500 w-1/2 text-center"/>
            <div className="flex items-center w-auto my-0 justify-center">
                <h4>Follow our social media!</h4>
                <a href="https://www.youtube.com/channel/UCu8lJrOjfnKtummPuJoGEcg/featured" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} className="h-5 w-5 mx-2 rotation-animation cursor-pointer"/>
                </a>
                <a href="https://web.facebook.com/donboscocenterpoipet" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 mx-2 rotation-animation cursor-pointer"/>
                </a>
            </div>
            <div className="flex items-center w-auto mb-1 mt-3 justify-center p-4 border-2">
                <h4 className="cursor-default">© {currentYear} Don Bosco Poipet. All rights reserved.</h4>
            </div>
        </footer>
    );
}

export default PageFooter;