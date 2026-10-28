import api from './api';

export const getRegisters = async () => {
    const response = await api.get('/registers');
    return response.data;
};

export const postRegister = async (data) => {
    const response = await api.post('/registers', data);
    return response.data;
};

export const updateRegister = async (id, data) => {
    const response = await api.put(`/registers/${id}`, data);
    return response.data;
};

export const deleteRegister = async (id) => {
    const response = await api.delete(`/registers/${id}`);
    return response.data;
};