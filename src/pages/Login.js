import Illustration from "../components/Illustration";
import loginImg from '../assets/images/login.svg';
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function Login(){
    const {currentUser} = useAuth();

    return !currentUser ? (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration img={loginImg} alt="Login img"/>
                <LoginForm />
            </div>
        </>
    ) : (<Navigate to="/quize-app" />)
}