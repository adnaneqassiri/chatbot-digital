"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

// Create UserContext with initial value of null
const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                const userObject = {
                    uid: authUser.uid,
                    displayName: authUser.displayName || null,
                    email: authUser.email || null,
                    photoURL: authUser.photoURL || null,
                    // Add other properties as needed
                };

                setUser(userObject);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    return useContext(UserContext);
};
