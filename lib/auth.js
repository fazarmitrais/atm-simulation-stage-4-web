import Cookies from "js-cookie";

const TOKEN_KEY = 'cookie_secret';

export const setToken = (token) => {
    Cookies.set(TOKEN_KEY, token, { expires:1, secure: false});
};

export const getToken = () => {
    return Cookies.get(TOKEN_KEY);
};

export const removeToken = () => {
    Cookies.remove(TOKEN_KEY);
}