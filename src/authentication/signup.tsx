import React, { useState, SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
    const [data, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPswd: ""
    });
    const navigate = useNavigate();

    const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        if (data.password !== data.confirmPswd) {
            alert("Passwords do not match");
            return;
        } else {
            try {
                const response = await axios.post("http://localhost:8080/register", {
                    email: data.email,
                    username: data.name,
                    password: data.password
                });
                console.log(response);
                if (response.data.message === 'User Already Registered') {
                    alert("User Already Exists!!");
                } else {
                    navigate('/');
                }
            } catch (error: any) {
                console.error("Error registering user:", error);
                alert("An error occurred during registration. Please try again.");
            }
        }
    }

    return (
        <div className='container-fluid signin-container'>
            <div className="bg-white wrap-login">
                <h1 className="text-center register-title">Register</h1>
                <form onSubmit={handleSubmit} className="form">
                    <div className="mb-3 mt-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="mobile" className="form-label">Mobile:</label>
                        <input
                            type="tel"
                            pattern="[0-9]{10}"
                            className="form-control"
                            id="mobile"
                            placeholder="Enter mobile (10 digits only)"
                            name="mobile"
                            value={data.mobile}
                            onChange={handleChange}
                            required
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
                            value={data.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm-pwd" className="form-label">Confirm Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirm-pwd"
                            placeholder="Confirm password"
                            name="confirmPswd"
                            value={data.confirmPswd}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary button">Sign Up</button>
                    <div className="mb-3">
                        <p className='login-link'>Already have an account? <Link to="/">Login now</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
