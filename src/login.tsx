import React, { useState, SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../src/assets/styles/auth.css';
import axios, { AxiosError } from "axios";

export default function SignIn() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/login", {
                email: email,
                password: password
            });
            sessionStorage.setItem("authToken",response.data.token);

            if (response.status === 401) {
                console.log("Invalid Credentials");
            } else if (response.status === 200) {
                navigate('/dashboard');
            }

        } catch (error: any) {
            alert("Invalid Credentials");
            console.error("Error logging in:", error);
        }
    };

    return (
        <div className='container-fluid signin-container'>
            <div className="bg-white wrap-login">
                <h1 className="text-center login-title">Login</h1>
                <form onSubmit={handleSubmit} className="form">
                    <div className="mb-4 mt-4">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary button">Login</button>
                    <div className="mb-3">
                        <p>Don't have an account? <Link to="/Signup">Create account</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
