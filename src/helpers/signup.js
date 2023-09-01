import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const signup = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        console.log(user);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error(errorCode + ' ' + errorMessage)
    }
}

export default signup;