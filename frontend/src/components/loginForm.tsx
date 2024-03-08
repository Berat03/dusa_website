import React, {useState} from "react";
import {useAuth} from "../auth/authContext";
import {useNavigate} from "react-router-dom";

export default function LoginForm() {
    const auth = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const loginSuccess = auth.login(username, password);
        if (loginSuccess) {
            navigate('/admin');
        } else {
            setError('Invalid username or password');
        }
    };
    return (
        <form className="font-bold text-black" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center">
                <div>
                    <label >
                        Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                </div>
            </div>

            {error && <p style={{color: 'red'}}>{error}</p>}
            <button className="flex justify-center rounded-lg bg-red-100" type="submit">Login</button>
        </form>
    )
}