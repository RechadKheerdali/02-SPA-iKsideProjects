// import './IkGoogleOAuthComponent.css';
import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';

/**/
/*
*/

const IkGoogleOAuthComponent = props => {
    const [iKauth2State, iKauth2SetState] = useState(null);
    const [iKisLoggedInState, iKisLoggedInSetState] = useState(null);

    useEffect(() => {
        const iKgapi = window.gapi;

        iKgapi.load('client:auth2', () => {
            iKgapi.client.init({
                clientId: "478722968109-4tnv95algrocvbc2ktbo9bai1iskpn5u.apps.googleusercontent.com",
                scope: "email"
            })
                .then(() => {
                    const iKauth2Instance = iKgapi.auth2.getAuthInstance();
                    iKauth2SetState( iKauth2Instance );
                    iKisLoggedInSetState( iKauth2Instance.isSignedIn.get() );
                    iKauth2Instance.isSignedIn.listen( iKbooleanP => iKsignInStatusChanges(iKbooleanP) );
                    console.log( iKauth2Instance.isSignedIn.get() );
                })
        }); /*END .load() */
    }, []); /*END useEffect() */


    const iKsignInStatusChanges = iKbooleanP => {
        switch (iKbooleanP) {
            case true:
                iKisLoggedInSetState( true );
                break;
            case false:
                iKisLoggedInSetState( false );
                break;
            default:
                return;
        };
    }; /*END iKsignInStatusChanges */

    const iKonSignInClick = () => {
        if (iKauth2State.isSignedIn.get() === false) {
            console.log(iKauth2State.isSignedIn.get());
            iKauth2State.signIn().catch(() => console.warn('iK closed popup screen'))
            setTimeout(
                () => console.log(iKauth2State.isSignedIn.get()),
                4000
            );
        }
        else if (iKauth2State.isSignedIn.get() === true) {
            console.log(iKauth2State.isSignedIn.get());
            iKauth2State.signOut();
            setTimeout(
                () => console.log(iKauth2State.isSignedIn.get()),
                4000
            );
        }
    }; /*END iKonSignInClick */

    const iKsignedInButton = () => {
        if (iKisLoggedInState === null) {
            return 'iK fold page';
        }
        else if (iKisLoggedInState === true) {
            return 'iK currently signed in';
        }
        else if (iKisLoggedInState === false) {
            return 'iK currently signed out';
        };
    }; /*END iKsignedInButton */

    return (
        <div>
            <button
                onClick={iKonSignInClick}
            >{iKsignedInButton()}</button>
        </div>
    ); /*END return */
}; /*END IkGoogleOAuthComponent component */

export default IkGoogleOAuthComponent;






// if (iKauth2State === null) { 
//     console.log(iKauth2State);
// }
// else {
//     console.log(iKauth2State);
//     console.log(iKauth2State.isSignedIn.get());
//     console.log(iKauth2State.currentUser.get().getBasicProfile().getId());
// };