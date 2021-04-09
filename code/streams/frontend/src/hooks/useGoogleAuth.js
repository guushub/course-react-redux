import { useEffect, useState } from 'react';


const useGoogleAuth = (clientId) => {
    const [auth, setAuth] = useState(null);
    const [isSignedIn, setIsSignedIn] = useState(null);

    useEffect(() => {
        if(auth) {
            setIsSignedIn(auth.isSignedIn.get());
            return;
        }

        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: clientId,
                scope: 'email'
            })
            .then(() => {
                const authInstance = window.gapi.auth2.getAuthInstance();
                authInstance.isSignedIn.listen(() => {
                    setIsSignedIn(authInstance.isSignedIn.get());
                });
                setAuth(authInstance);
            });
        });

    }, [clientId, setAuth, auth, setIsSignedIn]);


    return [isSignedIn, auth];
    
};

export default useGoogleAuth;

