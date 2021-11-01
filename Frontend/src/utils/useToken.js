import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('NOCTokenDetails');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('NOCTokenDetails', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
}