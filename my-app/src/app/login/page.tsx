'use client';
import { FormEvent, useEffect, useState } from "react";
import { PocketBaseInitialize } from "../../utility/pocketbase";
import {Inter} from 'next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

// Initialize fonts for better performance
const inter = Inter({subsets:['latin-ext']});

export default function LoginPage(): JSX.Element {
    const [status, setStatus] = useState("Initializing...");
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({username_email: '',password:''})

    useEffect(() => {
        async function initDatabase():Promise<void> {
            try {
                const pb =  PocketBaseInitialize();
                pb.autoCancellation(false)
                await pb.health.check();
                setStatus("Pocketbase initialized successfully!");

            } catch (error) {
                setStatus("Failed to initialize Pocketbase");
                setError(error instanceof Error ? error.message : String(error));
            }
        }
        initDatabase();
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setStatus("Submitting...");
        try {
            const pb = PocketBaseInitialize();
            await pb.collection('users').authWithPassword(formData.username_email,formData.password);
            setStatus("Data submitted successfully!");
            setFormData({username_email: '', password:''}); // Reset form after submit
        } catch (error) {
            setStatus("Failed to submit data");
            setError(error instanceof Error ? error.message : String(error));
        }
    };

    const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    return (
        <div className={`flex flex-col justify-center items-center relative z-10 ${inter.className}`}>
            {/* The entire form section not including the pocketbase status */}
            <div className="flex flex-col justify-center w-full h-full lg:w-[50%] sm:w-2/3 p-3 rounded-2xl
              bg-blue-950/70 backdrop-blur-lg text-white border-2">
                {/* Title and subtitle (Welcome back! and Type in your information below!) */}
                <h2 className="flex justify-center text-lg lg:text-xl font-bold">Welcome Back!</h2>
                <h3 className="flex justify-center text-base lg:text-lg">Type in your information below!</h3>
                {/* Login form */}
                <div className="flex flex-col justify-center items-center text-sm lg:text-base my-5">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-3/4 text-white">
                        {/* Username input */}
                        <div className="inline mx-1 space-x-1 ">
                            <FontAwesomeIcon icon={faUser}/>
                            <span>Enter username or email:</span>
                        </div>
                        <input required name="username_email" type="text" className="my-2 rounded-full p-2
                        bg-transparent/50 backdrop-blur-md border-2 placeholder:text-white"
                        onChange={handleInputChanges} placeholder="Username or  Email"
                        value={formData.username_email}/>
                        {/* Password input */}
                        <div className="inline mx-1 space-x-1">
                            <FontAwesomeIcon icon={faKey}/>
                            <span>Enter your password:</span>
                        </div>
                        <input required type="password" name="password" placeholder="Password"
                        value={formData.password} onChange={handleInputChanges} className="my-2 rounded-full p-2
                        bg-transparent/50 backdrop-blur-md border-2 placeholder:text-white" />
                        {/* Button element to submit the form */}
                        <button type="submit" className="bg-black text-white my-2 rounded-full text-base
                        p-3 hover:bg-white hover:text-black transition-colors duration-200">Log in</button>
                    </form>
                    {/* Google and facebook login method*/}
                    <hr className="my-3 border-2 w-3/4 rounded-full border-white/50"/>
                    <div className="flex flex-col text-white w-full items-center">
                        <p className="text-base">Or login by using:</p>
                        {/* Icons container */}
                        <div className="flex flex-col mt-2 w-1/2 justify-center items-center space-y-2">
                            {/* Google */}
                            <div className="w-full p-3 border-2 group/google
                            hover:bg-white transition-colors duration-100 flex flex-row
                            space-x-7 cursor-pointer">
                                <FontAwesomeIcon icon={faGoogle} className="w-6 h-6 group-hover/google:text-black
                                transition-colors duration-100"/>
                                <p className="font-bold group-hover/google:text-black">Login via google</p>
                            </div>
                            {/* Facebook */}
                            <div className="w-full p-3 border-2 group/facebook
                            hover:bg-white transition-colors duration-100 flex flex-row
                            space-x-7 cursor-pointer">
                                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 group-hover/facebook:text-black
                                transition-colors duration-100"/>
                                <p className="font-bold group-hover/facebook:text-black">Login via facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Pocketbase Initialization Test</h1>
            <p>Status: {status}</p>
            {error && (
                <div className="text-red-500">
                    <p>Error details:</p>
                    <pre>{error}</pre>
                </div>
            )}
        </div>
    );
}
