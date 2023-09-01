import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const signin = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
    } catch (error) {
        throw new Error(error.message)
    }
}

export default signin;