import api from './api';

export const getTypeKendaraans = async () => {
    const response = await api.get('/type-kendaraans');
    return response.data;
};
