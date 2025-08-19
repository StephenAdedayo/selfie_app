import { useRouter } from "expo-router"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"
import ThemedLoader from "../ThemedLoader"

const UserOnly = ({children}) => {
   
    // protecting the profile page to allow only authenticated users to view the page 
    const {user, authChecked} = useUser()
    const router = useRouter()
    
    // it checks if authchecked is true and user is null then sends user back to login
    useEffect(() => {
     if(authChecked && user === null){
        router.replace("/login")
     }
    }, [user, authChecked])
     
    // if authchecked is false and no user return a themeloader
    if(!authChecked || !user){
        return (
            <ThemedLoader />
        )
    }

    return children

}


export default UserOnly