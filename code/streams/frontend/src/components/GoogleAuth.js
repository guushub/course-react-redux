import React, {useEffect} from 'react'
import { useSelector, useDispatch  } from "react-redux";
import { signIn, signOut } from '../actions';
import useGoogleAuth from '../hooks/useGoogleAuth';

const renderAuthButton = (isSignedIn, auth) => {
    if(isSignedIn === null || !auth) {
        return null;
    } else if (isSignedIn) {
        return (
            <button onClick={auth.signOut} className="ui red google button">
                <i className="google icon" />
                Sign out
            </button>
        );
    }

    return (
        <button onClick={auth.signIn} className="ui red google button">
            <i className="google icon" />
            Sign in
        </button>
    );

}



const GoogleAuth = () => {
    // const [clientLibIsLoaded, setClientLibIsLoaded]

    const { isSignedIn } = useSelector(state => ({ isSignedIn: state.auth.isSignedIn }));
    const dispatch = useDispatch();

    const [isSignedInGoogle, auth] = useGoogleAuth('146958061153-njb0ul8d9d0mq1sdktonk1movcch5bq4.apps.googleusercontent.com');

    useEffect(() => {
        if(!auth) {
            return;
        }

        const userId = auth.currentUser.get().getId();
        if(isSignedInGoogle) {
            dispatch(signIn(userId));
            return;
        }

        dispatch(signOut(userId));

    }, [isSignedInGoogle, auth, dispatch]);


    return (
        <div>
            {renderAuthButton(isSignedIn, auth)}
        </div>
    )
}

export default GoogleAuth;
