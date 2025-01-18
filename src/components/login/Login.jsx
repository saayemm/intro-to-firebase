import { getAuth ,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
    const auth = getAuth(app);
    console.log(app)
    const provider = new GoogleAuthProvider();

    const hundleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result=> {
            const user = result.user;
            console.log(user)
        })
        .catch(error=> {
            console.log("error", error.message)
        })
    }
  return (
    <div className="flex flex-col m-auto gap-3">
        <h2>Welcome to Login Page</h2>
        <button className="bg-green-700 text-white px-6 py-2 rounded-sm" onClick={hundleGoogleSignIn}>Google Login</button>
    </div>
  )
}

export default Login