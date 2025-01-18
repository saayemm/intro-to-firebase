import { getAuth ,GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null)

    const auth = getAuth(app);
    console.log(app)
    const provider = new GoogleAuthProvider();

    const hundleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result=> {
            const loggedInUser = result.user;
            console.log(loggedInUser)
            setUser(loggedInUser)
        })
        .catch(error=> {
            console.log("error", error.message)
        })
    }

    const hundleGoogleSignOut = () => {
        signOut(auth)
        .then(result=> {
            console.log(result)
            setUser(null)
        })
        .catch(error=> {
            console.log("error", error.message)
        })
    }
  return (
    <div className="flex flex-col m-auto gap-3">
        <h2>Welcome to Login Page</h2>
       {
        user ?  
        <button className="bg-red-700 text-white px-6 py-2 rounded-sm" onClick={hundleGoogleSignOut}>Sign Out</button> :
        <button className="bg-green-700 text-white px-6 py-2 rounded-sm" onClick={hundleGoogleSignIn}>Sign In</button> 
       }
       {
        user && <div>
             <h2>{user.displayName}</h2>
             <img src={user.photoURL} alt="" />
        </div>
       }
    </div>
  )
}

export default Login