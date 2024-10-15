import { useEffect } from 'react';

export default function useCheckDeviceSize(initialCheckFunction: (setStateAction: boolean) => void) {
    useEffect(() => {
        const checkScreenSize = () => {
            // Set initialCheckDone to true after the initial check
            initialCheckFunction(true);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, [initialCheckFunction]);
}