import Summary from "../components/Summary";
import Analysis from "../components/Analysis";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function Result(){
    const {currentUser} = useAuth();

    return currentUser ? (
        <>
            <Summary />
            <Analysis />
        </>
    ) : <Navigate to="/signup" />
}