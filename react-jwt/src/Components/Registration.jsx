

import React, { useState } from 'react';
import AuthUser from './AuthUser';

const Registration = () => {
    const { http, setToken } = AuthUser();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState(null);

    const submitForm = async () => {
        if (password !== passwordConfirmation) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await http.post('/api/registration', { name, email, password });
            const { user, access_token } = response.data;
            setToken(user, access_token);
        } catch (error) {
            console.error('Error during API call:', error);
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className='row justify-content-center pt-5'>
            <div className='col-sm-6'>
                <div className="card p-4">
                    <div className="form-group mt-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" value={name}
                            onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="password_confirmation" value={passwordConfirmation}
                            onChange={e => setPasswordConfirmation(e.target.value)} />
                    </div>
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-3">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;