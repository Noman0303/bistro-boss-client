import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();


const AuthProvider = ({children}) => {

const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true);

const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

const signInUser = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
}

const signInWithGitHub = () =>{
    setLoading(true);
    return signInWithPopup(auth,gitHubProvider);
}

const signInWithFacebook = () =>{
    setLoading(true);
    return signInWithPopup(auth,facebookProvider);
}


const logOut =()=>{
    setLoading(true);
    return signOut(auth);
}




useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser);
        console.log(currentUser);
        setLoading(false)
    });
    return () =>{
        return unsubscribe();
    }
},[])


const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    signInWithGoogle,
    signInWithGitHub,
    signInWithFacebook
}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;