import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/.firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign in user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    
    const authInfo = {
        createUser,
        signIn,
        user

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;