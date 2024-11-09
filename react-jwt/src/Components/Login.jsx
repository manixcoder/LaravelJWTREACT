import React, { useState } from 'react'
import AuthUser from './AuthUser'

const Login = () => {
    const { http, setToken } = AuthUser();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = async () => {
        //console.log(email + " " + password);
        //api call 

        
        try {
            const response = await http.post('/login', { email, password });
            console.log(response.data);
        } catch (error) {
            console.error('Error during API call:', error);
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className='row justify-content-center pt-5'>
            <div className='col-sm-6'>
                <div className="card p-4">
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                    <button type="submit" onClick={submitForm} className="btn btn-primary mt-3">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;