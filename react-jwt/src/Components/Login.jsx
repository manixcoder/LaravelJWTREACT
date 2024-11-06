import React, { useState } from 'react'
import AuthUser from './AuthUser'
import axios from 'axios';

const Login = () => {

    const { http } = AuthUser();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const apiClient = axios.create({
        baseURL: 'http://localhost:8000',
        headers: { 'Authorization': 'Bearer token' },
      });

    const submitForm = async () => {
        //console.log(email + " " + password);
        //api call 
        console.log(typeof apiClient.post);
        
        try {
            const response = await apiClient.post('/login', { email, password });
            console.log(response.data);
        } catch (error) {
            console.error('Error during API call:', error);
        }
    }
    return (
        <div className='row justify-content-center pt-5'>
            <div className='col-sm-6'>
                <div className="card p-4">
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)}
                        />

                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" onClick={submitForm} className="btn btn-primary mt-3">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login