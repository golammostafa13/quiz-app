import { Navigate } from "react-router-dom";
import Answer from "../components/Answer";
import ProgressBar from "../components/ProgressBar";
import { useAuth } from "../contexts/AuthContext";

export default function Quiz(){
    const {currentUser} = useAuth();

    return currentUser ? (
        <>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answer />
            <ProgressBar />
        </>
    ) : <Navigate to="/signup" />
}