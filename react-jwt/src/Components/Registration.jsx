import React, { useState } from 'react'
import axios from 'axios';

const Registration = () => {
    const apiClient = axios.create({
        baseURL: "http://localhost:8000",
        headers: {
            'Accept': "Bearer token"
        }
    });

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const submitForm = async () => {
        console.log(name+" "+email + " " + password);
        //api call 


        try {
            const response = await apiClient.post('/api/registration', { name, email, password });
            console.log(response.data);
        } catch (error) {
            console.error('Error during API call:', error);
        }
    }
    return (
        <>
            <div className='row justify-content-center pt-5'>
                <div className='col-sm-6'>
                    <div className="card p-4">
                        <div className="form-group mt-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' id="name" aria-describedby="emailHelp"
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" email='email' id="exampleInputEmail1" aria-describedby="emailHelp"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' id="exampleInputPassword1"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="password_confirmation" className="form-label">Password</label>
                            <input type="password" name='password_confirmation' className="form-control" id="password_confirmation"
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" onClick={submitForm} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration