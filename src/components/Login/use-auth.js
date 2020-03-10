import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";


firebase.initializeApp(firebaseConfig);


const Auth = () => {
    const [user, setUser] = useState(null);
    
    const singInWithGoogle = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName, email, photoURL} = res.user;
            const singedInUser = {name: displayName, email, photo: photoURL}; 
            setUser(singedInUser);
            return res.user;
        })
        .catch(err => {
            setUser(null);
            return err.mesage;
        })
    }
    const signOut = () => {
        firebase.auth().signOut().then(function() {
            setUser(null);
          }).catch(function(error) {
            console.log(error);
          });
    }
    return {
        user,
        singInWithGoogle,
        signOut
    }
}

export default Auth;