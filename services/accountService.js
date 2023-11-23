import { setToken } from "../lib/auth";

export const accountService = {
    login,
};

async function login(router, data, pMessage) {
    let isError = false;
    const res = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data,
    });
    isError = !res.ok;
    res.json()
        .then(res => {
            if (isError) {
                pMessage.innerHTML = res.message;
                return
            }
            setToken(res.token);
            router.push('/');
        })
        .catch((error) => {
            pMessage.innerHTML = error;
        });
};
