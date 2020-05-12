import API from '../utils/API';



export const login = (body) =>{
    return API.post('user/login',body)
        .then(response=>{
            let data = response.data;

            return data;
        })
}

export function logout() {
    return API.post('user/logout', {})
        .then(response => {
            let data = response.data;

            return data;
        })
}

export const getTransactions = (params) =>{
    return API.get(`transactions?${params}`)
        .then(response => {
            let data = response.data;

            return data;
        })
};

export const getTransaction = (params) => {
    return API.get(`transactions/${params}`)
        .then(response => {
            let data = response.data;

            return data;
        })
};

export const getProducts = (params) => {
    return API.get(`products?${params}`)
        .then(response => {
            let data = response.data;

            return data;
        })
};

export const createProduct = (body) => {
    return API.post(`products`,body)
        .then(response => {
            let data = response.data;

            return data;
        })
};

export const getUsers= (params) => {
    return API.get(`users?${params}`)
        .then(response => {
            let data = response.data;

            return data;
        })
}

