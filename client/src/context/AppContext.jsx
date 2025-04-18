import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';


export const AppContent = createContext();

export const AppContextProvider =(props)=>{

    const backendUrl =import.meta.env.VITE_BACKEND_URL
    const [isLoggedin,setIsLoggedIn] = useState(false);
    const [userData,setUserData] = useState(false);

    const getAuthState =async ()=>{
        try {
            const {data}=await axios.get(backendUrl + '/api/auth/is-auth',{ withCredentials: true});
            if(data.success){
                setIsLoggedIn(true)
                getUserData()
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        getAuthState();
    },[])
    const getUserData = async()=>{
        try {
            const{data} =await axios.get(backendUrl + '/api/user/data',{ withCredentials: true})
            data.success ? setUserData(data.userData): toast.error(data.message)
        } catch (error) {
            console.log("Login Error:", error);
            toast.error(error.response?.data?.message);
        }
    }

    const value={
        backendUrl,
        isLoggedin,setIsLoggedIn,
        userData,setUserData,
        getUserData
    }
    return(
        <AppContent.Provider value={value}>
           {props.children}
        </AppContent.Provider>
    )

}