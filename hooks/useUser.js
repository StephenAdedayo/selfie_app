import { useContext } from "react";
import { UserContext } from "../context/UserContext";


export function useUser(){

    const context = useContext(UserContext)

    if(!context){
        throw new Error("useUser must be used within the provider")
    }

    return context

}