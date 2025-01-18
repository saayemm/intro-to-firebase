import { getAuth ,GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const hundleGoogleSignIn = () => {
        console.log("google sign in")
    }
  return (
    <div>
        <h2>Welcome to Login Page</h2>
        <button onClick={hundleGoogleSignIn}>Google Login</button>
    </div>
  )
}

export default Login