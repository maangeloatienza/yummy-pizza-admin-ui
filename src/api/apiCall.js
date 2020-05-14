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

export const getUser = (params) => {
    return API.get(`users/${params}`)
        .then(response => {
            let data = response.data;

            return data;
        })
}

export const getBanners = () => {
    return API.get(`banners`)
        .then(response => {
            let data = response.data;

            return data;
        })
}

export const updateBanner = (params,body) => {
    return API.put(`banners/${params}`,body)
        .then(response => {
            let data = response.data;

            return data;
        })
}

export function getUserCart(params) {
    return API.get(`booking-items?${params}`)
        .then(response => {
            let data = response.data;
            
            return data;
        });
}

export function addCart(endpoint, body) {
    return API.post(`booking-items?`, body)
        .then(response => {
            let data = response.data;

            return data;
        });
}

export function updateCart(params, body) {
    return API.put(`booking-items/${params}`, body)
        .then(response => {
            let data = response.data;

            return data;
        })
}

export function checkout(body) {
    return API.post(`transactions?`, body)
        .then(response => {
            let data = response.data;

            return data;
        });

}