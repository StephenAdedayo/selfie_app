import { useRouter } from "expo-router"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"
import ThemedLoader from "../ThemedLoader"

const UserOnly = ({children}) => {
   
    // protecting the profile page to allow only authenticated users to view the page 
    const {user, authChecked} = useUser()
    console.log(user);
    
    
    const router = useRouter()
    
    // it checks if authchecked i.e checking auth is true and user is null then sends user back to login
    useEffect(() => {
     if(authChecked && user === null){
        router.replace("/login")
     }
    }, [user, authChecked])
     
    // it checks if auth is not being checked and user === null return loader going to login page
    if(!authChecked || !user){
        return (
            <ThemedLoader />
        )
    }

    return children

}


export default UserOnly