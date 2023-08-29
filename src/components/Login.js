import { backgroundImageUrl } from "../utils/constants";
import Header from "./Header";
import LoginForm from "./LoginForm";
const Login = () => {
    return (
        <div className="bg-cover bg-center h-screen overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <Header />
            <div className="h-screen bg-black bg-opacity-50 flex justify-center items-center">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login;