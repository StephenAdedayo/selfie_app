import { Children, createContext, useState } from "react";
import { database } from "../lib/appwrite";
import { ID, Permission, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

export const BooksContext = createContext()


export function BooksContextProvider({children}){

    const DATABASE_ID = "68a4b9f4000afefb184a"
    const COLLECTION_ID = "68a4ba75002c17033e24"
    const {user} = useUser()

    const [books, setBooks] = useState([])

    async function fetchbooks(){
        try {
            
        } catch (error) {
            console.log(error.message);
            
        }
    }

    async function getbooksbyId(id){
         try {
            
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
            
        } catch (error) {
            console.log(error.message);
           
    }
    }
  return (
    <BooksContext.Provider value={{books, getbooksbyId, createbooks, fetchbooks, deletebook}}>
        {children}
    </BooksContext.Provider>
  )
}
