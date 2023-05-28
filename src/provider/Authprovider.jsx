import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext =createContext();
const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const LogOut =()=>{
        return signOut(auth)
    }


    useEffect( ()=>{
        
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser( currentUser);
            console.log('currentUser', currentUser);
            setLoading(false)
        });
        return()=>{
            return unsubscribe();
        }
    },[])

    
    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        LogOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;