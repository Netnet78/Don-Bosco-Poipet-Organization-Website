import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

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

    Privacy Policy & Terms of Service
        Links to your website’s privacy policy and terms of service

    Site Map
        A brief site map for easy navigation

    Accreditations or Certifications
        Logos or badges of any relevant accreditations or partnerships that lend credibility to your organization

    Funding Partners or Sponsors
        Logos of sponsors or partners who support your mission (if applicable)

    Call to Action
        A brief statement encouraging users to take action (e.g., "Join us in making a difference!" with a link to the donation page)
*/
const PageFooter = () => {
    return (
        <footer className="sm:h-48 bg-slate-800 text-white flex flex-col items-center justify-between p-4 text-sm">
            <div className="flex items-center w-auto my-0 justify-center mb-0">
                <FontAwesomeIcon icon={faMapPin} className="h-5 w-5 mr-2"/>
                <b className="ml-1 mr-1">Mittapheap</b>Village,
                <b className="ml-1 mr-1">Poipet</b>Commune, 
                <b className="ml-1 mr-1">Poipet</b> City,
                <b className="ml-1 mr-1">Banteay Meanchey</b>Province
            </div>
            <div className="flex items-center w-auto my-0 justify-center">
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mr-2"/>
                <span className="ml-1">Phone Number: +855 78 581 695</span>
            </div>
            <hr className="border-t-4 border-white my-0 w-full"/>
            <div className="flex items-center w-auto my-0 justify-center">
                <h4 className="text-sm font-bold text-center mb-5">Quick Links</h4>
                <div className="flex flex-wrap justify-center space-x-3">
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/programs">Programs</a>
                    <a href="/admission">Admission</a>
                </div>
            </div>
        </footer>
    );
}

export default PageFooter;