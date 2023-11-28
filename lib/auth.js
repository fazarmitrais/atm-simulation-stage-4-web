import Cookies from "js-cookie";
import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies";

const TOKEN_KEY = 'cookie_secret';

export const setToken = (token) => {
    Cookies.set(TOKEN_KEY, token, { expires:1, secure: false});
};

export const getToken = (req) => {
    if (req != null || req != undefined) {
        const cookies = parseCookie(req.headers.cookie || '');
        return cookies.get(TOKEN_KEY);
    }
    return Cookies.get(TOKEN_KEY);
};

export const removeToken = () => {
    Cookies.remove(TOKEN_KEY);
}