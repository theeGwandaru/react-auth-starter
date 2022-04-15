import { useEffect, useState } from "react";
import { useToken } from "./useToken"

export const useUser = ()=>{
    const[token] = useToken();

    const getUserFromToken = (token) => {
        const encoded = token.split('.')[1];
        return JSON.parse(atob(encoded));
    }

    const[user, setUser] = useState(()=>{
        if(!token){
            return null;
        }
        return getUserFromToken(token);
    });

    useEffect(()=>{
        if(!token){
            setUser(null);
        } else {
            console.log(getUserFromToken(token));
            setUser(getUserFromToken(token));
        }
    },[token]);
    return user;
}