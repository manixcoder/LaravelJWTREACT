import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthUser() {
    const navigate = useNavigate();

    const getToken = () => {
        return JSON.parse(sessionStorage.getItem('token'));
    };

    const getUser = () => {
        return JSON.parse(sessionStorage.getItem('user'));
    };

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (userData, tokenData) => {
        sessionStorage.setItem('token', JSON.stringify(tokenData));
        sessionStorage.setItem('user', JSON.stringify(userData));

        setToken(tokenData);
        setUser(userData);

        navigate('/dashboard');
    };

    const http = axios.create({
        baseURL: "http://localhost:8000",
    });

    // Add Authorization header dynamically
    http.interceptors.request.use((config) => {
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    });

    return {
        setToken: saveToken,
        token,
        user,
        getToken,
        http,
    };
}