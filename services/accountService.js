import { BehaviorSubject } from 'rxjs';
import { getToken, setToken, removeToken } from "../lib/auth";

const userSubject = new BehaviorSubject(process.browser && getToken())

export const accountService = {
    user: userSubject.asObservable(),
    get userValue() { return userSubject.value },
    login,
    logout,
};

async function logout(router) {
    removeToken();
    userSubject.next(null);
    router.push("/account/login");
}

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
            userSubject.next(res.token);
            setToken(res.token);
            const returnUrl = router.query.returnUrl || '/';
            router.push(returnUrl);
        })
        .catch((error) => {
            pMessage.innerHTML = error;
        });
};
