import { useState } from "react";
import BottomWarning from "./BottomWarning";

function Signin () {
    const [formState, setFormState] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState([]);

    const handleInput = (e) => {
        setFormState({
            ...formState,
            [e.target.id]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = formState;
        const errors = [];

        if (!email || !email.includes('@')) {
            errors.push('Valid email is required');
        }

        if (!password || password.length < 6) {
            errors.push('Password must be at least 6 characters long');
        }

        if (errors.length > 0) {
            setErrors(errors);
            return;
        }
    }

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <form action="" className="rounded-lg bg-white w-80 text-center p-2 h-max px-4" onSubmit={handleSubmit}>
                <h1 className="font-bold text-4xl pt-6">Sign In</h1>
                <div className="text-sm font-medium text-left py-2">
                    <label htmlFor="email">Email</label>
                    <input className="w-full px-2 py-1 border rounded border-slate-200"
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        value={formState.email}
                        onChange={handleInput}
                    />
                </div>
                <div className="text-sm font-medium text-left py-2">
                    <label htmlFor="password">Password</label>
                    <input className="w-full px-2 py-1 border rounded border-slate-200"
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        value={formState.password}
                        onChange={handleInput}
                    />
                </div>
                <button className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" type="submit">Sign in</button>
                <BottomWarning label={"Create an account"} buttonText={"Sign up"} to={"signup"} />
            </form>
            {errors.length > 0 && (<p>Something went wrong</p>)}
        </div>
        </div>
    );
};

export default Signin;