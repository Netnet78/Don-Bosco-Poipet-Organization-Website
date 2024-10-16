'use client';
import { FormEvent, useEffect, useState } from "react";
import { PocketBaseInitialize } from "../../utility/pocketbase";

export default function LoginPage(): JSX.Element {
    const [status, setStatus] = useState("Initializing...");
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({username: '',password:''})

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
            await pb.collection('users').create(formData);
            setStatus("Data submitted successfully!");
            setFormData({username: '', password:''}); // Reset form after submit
        } catch (error){
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
        <div>
            <h2 className="flex justify-center text-base lg:text-lg font-bold">Welcome Back!</h2>
            <h3 className="flex justify-center text-sm lg:text-base">Type in your information below!</h3>
            <div className="flex justify-center text-sm lg:text-base">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-1/2">
                    <input required name="username" type="text" 
                    onChange={handleInputChanges} placeholder="New username" value={formData.username}/>
                    <input required type="password" name="password" placeholder="Password" 
                    value={formData.password} onChange={handleInputChanges} />
                    <button type="submit" className="bg-black text-white my-2 rounded-full">Log in</button>
                </form>
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
