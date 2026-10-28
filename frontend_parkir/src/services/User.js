import api from './api';

export const getHomeStats = async () => {
    const response = await api.get('/dashboard');
    return response.data;
};