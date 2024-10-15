// Enables use of client-side React features
"use client";

// Importing necessary components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import "./Header.css";
// @ts-ignore
import flash from "./FlashBackground.module.css";
// @ts-ignore
import bau from "./BoxAndUnderline.module.css";
// @ts-ignore


// Main navigation component
export default function Navigation() {
    // Check what is the current link
    const pathName = usePathname();
    // State for controlling mobile menu open/close
    const [isNavOpen, setIsNavOpen] = useState(false);
    // State for detecting mobile screen size
    const [isMobile, setIsMobile] = useState(false);
    // State for checking if the screen is mobile or not before showing the link
    const [initialCheckDone, setInitialCheckDone] = useState(false);

    // Effect to check and update screen size
    useEffect(() => {
        const checkScreenSize = () => {
            // Set isMobile true if screen width is less than 1024px
            setIsMobile(window.innerWidth < 1024);
            // Set initialCheckDone to true after the initial check
            setInitialCheckDone(true);
        };

        // Initial check
        checkScreenSize();
        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup function to remove event listener
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Function to toggle mobile menu
    const toggleNav = () => {
        setIsNavOpen(prevState => !prevState);
    };

    return (
        // Header container with gradient background and flex layout
        <header className={`body-of-nav ${flash.error}`}>
            {/* Logo image, responsive size */}
            <Image
                src="/images/dbs-white-fill.png"
                alt="Picture of the Don Bosco Poipet Logo"
                width={100}
                height={50}
                className="w-auto h-10 lg:h-14"
            />
            {/* School name container, white text */}
            <div className="ml-2 my-auto text-white">
                <h4 className="text-xs lg:text-base">DON BOSCO</h4>
                <h4 className="text-xs lg:text-base">1 to 12 & Technical High School Poipet</h4>
            </div>
            {/* Mobile menu toggle button, hidden on larger screens */}
            <button
                onClick={toggleNav}
                className="ml-auto lg:hidden text-white">
                {isNavOpen ? 'Close ✕' : 'Menu ☰'}
            </button>
            {/* Navigation menu, changes layout based on screen size and menu state */}
            {initialCheckDone && (
                <nav className={`
                    ${isMobile ? 'mobile-navigation-menu' : 'desktop-navigation-menu'}
                    ${isMobile && isNavOpen ? 'translate-x-0' : isMobile ? 'translate-x-full' : ''}
                `}>
                    {/* Close button for mobile menu */}
                    {isMobile && (
                        <button
                            onClick={toggleNav}
                            className="absolute top-8 right-8 text-white text-base"
                        >
                            ✕
                        </button>
                    )}
                    {/* Navigation links container */}
                    <div className={`
                        ${isMobile ? 'mobile-nav-links-container' : 'desktop-nav-links-container'}
                    `}>
                        {/* Map through navigation items to create links */}
                        {['Home', 'About Us', 'Programs', 'Admission', 'Get Involved', 'Blog', 'Contact'].map((item, index) => {
                            const href = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '_')}_page`;
                            const mobileStyle = `border-2 border-white bg-blue-400`;
                            const desktopStyle = `border-b-2 border-white`;
                            let isActive = pathName === href;
                            return (
                                <Link 
                                key={index} 
                                href={href} 
                                className={`
                                    relative group
                                    ${isMobile ? 'mobile-links-display' : 'desktop-links-display'}
                                `}
                                onClick={(e) => {
                                    if (isMobile) {
                                        e.preventDefault();
                                        setTimeout(() => {
                                            toggleNav();
                                            window.location.href = href;
                                        }, 500);
                                    }
                                }}> 
                                    {/* Navigation link text with hover animation */}
                                    <span className={`hover-effect-support ${bau.boxAnimation} ${isActive ? isMobile ? `${mobileStyle}` : `${desktopStyle}` : ''}`}>
                                        {item}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            )}
            {/* Overlay for mobile menu when open */}
            {isMobile && isNavOpen && (
                <div className="black-overlay" onClick={toggleNav}></div>
            )}
        </header>
    );
}
export function Header() {
    // Define the phone number for the school
    const phoneNumber = "+855 78 581 695";
    // State to control the visibility of the phone number tooltip
    const [showTooltip, setShowTooltip] = useState(false);
    // State to control the visibility of the address tooltip
    const [showAddressToolTip, setShow] = useState(false);

    // Function to copy the phone number to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(phoneNumber).then(() => {
            console.log("Phone number copied to clipboard: ", phoneNumber);
        }).catch((err) => {
            console.error("Failed to copy: ", err);
        });
        // Update the tooltip text to "Copied!" after copying
        let text = document.getElementById('tooltip');
        if (text) {
            text.innerHTML = "Copied!";
        };
    };

    // Function to open Google Maps with the school's location
    const redirectToURL = () => {
        window.open("https://www.google.com/maps/dir//MH7F%2BJJP,+Krong+Poi+Pet/@13.6698677,102.5808242,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x311b16df76e8707b:0xc210610f792918d0!2m2!1d102.5740588!2d13.6640953?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D", "_blank")
    };

    return (
        // Main section container with responsive layout and styling
        <section className="mother-of-all-elements">

            {/* Container for address and phone number information */}
            <div className="information-container">
                {/* Phone number container */}
                <div className="phone-number-container">
                    {/* Phone icon */}
                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-2" />
                    {/* Phone number text with click-to-copy functionality and tooltip */}
                    <h4 
                        onClick={copyToClipboard}
                        onMouseOver={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        className="relative cursor-pointer"
                    >
                        Telephone: {phoneNumber}
                        {/* Tooltip for phone number */}
                        {showTooltip && (
                            <span id="tooltip" className="phone-num-copy-tooltip">Click to copy</span>
                        )}
                    </h4>
                </div>
                {/* Address container */}
                <div className="address-container">
                    {/* Location icon */}
                    <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 mr-2"/>
                    {/* Address text with click-to-redirect functionality and tooltip */}
                    <h4 
                        className="relative cursor-pointer"
                        onMouseOver={() => setShow(true)}
                        onMouseLeave={() => setShow(false)}
                        onClick={redirectToURL}
                    >
                        Mittapheap Village, Poipet Commune,
                        Poipet City, Banteay Meanchey Province
                        {/* Tooltip for address */}
                        {showAddressToolTip && (
                            <span className="address-locate-tooltip">Click to get direction</span>
                        )}
                    </h4>
                </div>
            </div>

            {/* Container for Contact, Login, and Signup buttons */}
            <div className="action-btns">
                {/* Contact Us button */}
                <span className="contact-btn-container">
                    <a href="/contact_page" className="contact-btn">
                        Contact Us
                    </a>
                </span>
                {/* "Are you our student?" text */}
                <div className="w-full xl:w-auto text-center xl:text-left">
                    <h4>Are you our student?</h4>
                </div>
                {/* Log in and Signup buttons container */}
                <div className="login-signup-container">
                    {/* Login button */}
                    <a href="/login" className="login-btn">
                        Log in
                    </a>
                    {/* Signup button */}
                    <a href="/signup" className="signup-btn">
                        Sign up
                    </a>
                </div>
            </div>
        </section>
    );
}