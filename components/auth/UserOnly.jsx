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
    // so once you click on log in, this work to check the below if statement in the hook

    useEffect(() => {
     if(authChecked && user === null){
        router.replace("/login")
     }
    }, [user, authChecked])
     
    // it checks if auth is not being checked and user === null return loader going to login page
    // this functions works with the useEffect above
    if(!authChecked || !user){
        return (
            <ThemedLoader />
        )
    }

    return children

}


export default UserOnly