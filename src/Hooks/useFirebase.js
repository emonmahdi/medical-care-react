import initializeAuthenticationFirebase from "../components/Auth/Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut    } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthenticationFirebase();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    // SingInUsing Google 
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        
      return  signInWithPopup(auth, googleProvider)
            
    }

    // State observer 
    useEffect(() => {
      const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    // Logout function
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then( () => {
            setUser({})
        }).finally(() => setIsLoading(false))
    }



    return{
        user,
        error,
        isLoading,
        setUser,
        setError,
        setIsLoading,
        signInUsingGoogle,
        logOut
    }

}





export default useFirebase;