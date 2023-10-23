import { API } from '../config';

export const getProducts = () => {
    return fetch(`${API}/seafood`, {
        method: 'GET',
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const deleteProduct = (productId) => {
    return fetch(`${API}/seafood/${productId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};