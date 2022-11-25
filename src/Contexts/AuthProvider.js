import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/.firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //sign in with google
    const googleProviderLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    };

    // sign in user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // sign out user
    const logOut = () => {
        return signOut(auth);
    };

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);


    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleProviderLogin


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;