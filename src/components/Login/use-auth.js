import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";


firebase.initializeApp(firebaseConfig);


const Auth = () => {

    const provider = new firebase.auth.GoogleAuthProvider();

    const singInWithGoogle = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            console.log(res);
            return res.user;
        })
        .catch(err => {
            console.log(err);
            return err.mesage;
        })
    }
    return {
        singInWithGoogle
    }
}

export default Auth;