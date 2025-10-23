import { Children, createContext, useEffect, useState } from "react";
import { client, database } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

export const BooksContext = createContext()


export function BooksContextProvider({children}){

    const DATABASE_ID = "68a4b9f4000afefb184a"
    const COLLECTION_ID = "68a4ba75002c17033e24"
    const {user} = useUser()

    const [books, setBooks] = useState([])

    async function fetchbooks(){
        try {
        const response = await database.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            // query allows us to fetch books for the user logged in only even though permissions has been set at createbooks
            [
                Query.equal("userId", user.$id)
            ]
        )
        setBooks(response.documents)
        console.log(response.documents);
        
        } catch (error) {
            console.log(error.message);
            
        }
    }

    async function getbooksbyId(id){
         try {
        const response = await database.getDocument(
            DATABASE_ID,
            COLLECTION_ID,
            id
        )
       return response
        } catch (error) {
            console.log(error.message);
           
    }

}

    async function createbooks(data){
                 try {
            const newBook = await database.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data, userId: user.$id},
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))

                ]
            )
        } catch (error) {
            console.log(error.message);
           
    }
    }

    async function deletebook(id){
                 try {
            await database.deleteDocument(
                DATABASE_ID,
                COLLECTION_ID,
                id
            )
        } catch (error) {
            console.log(error.message);
           
    }
    }

    useEffect(() => {
         
        // creating real time data to automatically load fetching of data in the books page when a new book is added
        let unsubscribe
        // create a channel in appwrite telling it to read from documents i.e the books
        const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`
        if(user){
            fetchbooks()
            // unsubscribe is set to subscribe to an event in the appwrite  when user is logged in to fetch books and also return a callback function .... next comment below
            unsubscribe = client.subscribe(channel, (response) => {
                // payload is whenever activity that just happened eithr creation or deletion
                // events are the actions that are done e.g create
                 const {payload, events} = response
                //  checks if event includes create, and setbooks to ...prevbook and also whenever the payload as i.e new actions like creation or deletion of books
                 if(events[0].includes("create")){
                    setBooks((prevBooks) => [...prevBooks, payload])
                 }

                 if(events[0].includes("delete")){
                    setBooks((prevBooks) => prevBooks.filter((book) => book.$id !== payload.$id))
                 }
            })
        }else{
            setBooks([])
        }

        // return a clearing function when the user is logged out and it set unsubscribe back to null
        return ()  => {
            if(unsubscribe) unsubscribe()
        }
    }, [user])
    
  return (
    <BooksContext.Provider value={{books, getbooksbyId, createbooks, fetchbooks, deletebook}}>
        {children}
    </BooksContext.Provider>
  )
}
