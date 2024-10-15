'use client';
import { useEffect, useState } from "react";
import { PocketBaseInitialize } from "../../utility/pocketbase";

export default function LoginPage(): JSX.Element {
    const [status, setStatus] = useState("Initializing...");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function initDatabase() {
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

    return (
        <div>
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
