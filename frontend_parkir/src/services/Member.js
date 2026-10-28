import api from './api';

export const getMemberships = async () => {
    const response = await api.get('/memberships');
    return response.data;
};