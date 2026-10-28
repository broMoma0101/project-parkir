import api from './api';

export const login = async (username, password) => {
    const response = await api.post('/login', { username, password });
    
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
};

export const logout = async () => {
    try {
        await api.post('/logout');
    } finally {
        localStorage.removeItem('token');
    }
};