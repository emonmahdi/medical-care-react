import initializeAuthenticationFirebase from "../components/Auth/Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile , signOut    } from "firebase/auth";
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

    // create new user register with email and password
    const registerUser = (name, email, password, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => { 
            setUser(result?.user)
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {}).catch((err) => {setError(err.message)})
            navigate('/')
        }).catch(error => {
            setError(error.message)
        })
    }

    // Register user login
    const loginUser = (email, password, navigate, location) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => { 
            const destination = location.state?.from || '/'
            setUser(result.user)
            navigate(destination);
            
        }).catch((error) => {
            setError(error.message)
        })
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
        registerUser,
        loginUser,
        logOut
    }

}





export default useFirebase;