import { useRouter } from "expo-router"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"
import ThemedLoader from "../ThemedLoader"

const GuestOnly = ({children}) => {
   
    const {user, authChecked} = useUser()
    const router = useRouter()
    
    // useffect runs to check if there is user and authchecked = true then sends the user back to profile page

    // so once you click on log in, this work to check the below if statement in the hook
    useEffect(() => {
     if(authChecked && user !== null){
        router.replace("/profile")
     }
    }, [user, authChecked])
    
    // if authchecked = false but there is user, show loader before routing to profile page
    // i.e you are logged in, the authchecked won't be checked when you click on profile page
    // this functions works with the useEffect above


    if(!authChecked || user){
        return (
            <ThemedLoader />
        )
    }

    return children

}


export default GuestOnly