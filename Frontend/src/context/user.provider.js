import React, {createContext, useState, useEffect} from "react";
const context = createContext(null);

const UserProvider = ({children}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const tokenDetailsString = localStorage.getItem('NOCTokenDetails');
        const tokenDetails = JSON.parse(tokenDetailsString);
        
        if(tokenDetails){
        const accessToken = tokenDetails.token;
        const email = tokenDetails.email;
        const name = tokenDetails.name;
        const userId = tokenDetails.userId;

        setUser({accessToken, email, name, userId});
        }
    }, []);

    return ( 
        <context.Provider value = {user}> 
            {children} 
        </context.Provider>
    );
};

UserProvider.context = context;
export default UserProvider;