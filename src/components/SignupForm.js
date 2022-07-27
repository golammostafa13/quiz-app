import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";
import { useAuth } from "../contexts/AuthContext";


export default function SignupForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const {signup} = useAuth();
    const navigate = useNavigate();

    async function handlSubmit(e){
        
        e.preventDefault();
        if(password !== confirmPassword){
            setError("Passwords don't match!")
        }
        else if (password.length < 6){
            setError("Make a strong and long password");
        }
        try{
            setError("");
            setLoading(true);
            await signup(email, password, name);
            navigate("/quize-app");
        }catch(err){
            console.log(err);
            setError(err);
            setLoading(false);
            setError("Failed to create account!");
        }
    }

    return(
        <Form style={{height: '500px'}} onSubmit={handlSubmit}>
            <TextInput icon="person" type="text" required placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />

            <TextInput icon="alternate_email" type="text" required placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <TextInput icon="lock" type="password" required placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <TextInput icon="lock_clock" type="password" required placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <Checkbox text="I accept all the terms &amp; conditions" required value={agree} onChange={(e) => setAgree(e.target.value)} />

            <Button disabled={loading} type="submit"><span>Submit Now</span></Button>
            {error && <p className="error">{error}</p>}
            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    )
}