// return the user data from the session storage
export const getUser = () => {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

// return the token from the session storage
export const getToken = () => {
    const tokenStr = localStorage.getItem('token') ? localStorage.getItem('token') : null
    return tokenStr;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}

// set the token and user from the session storage
export const setUserSession = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
}

export const verifyUser = (user) => {

    // user ? localStorage.setItem('guest', user) : localStorage.getItem('guest');

    return localStorage.getItem('user') ? localStorage.getItem("user") : localStorage.getItem('guest');
}