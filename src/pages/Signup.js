import Illustration from '../components/Illustration';
import signupImg from '../assets/images/signup.svg';
import SignupForm from '../components/SignupForm';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function Signup(){
    const {currentUser} = useAuth();

    return !currentUser ? (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration img={signupImg} alt="Signup img"/>
                <SignupForm />
            </div>
        </>
    ) : (<Navigate to="/" />)
}