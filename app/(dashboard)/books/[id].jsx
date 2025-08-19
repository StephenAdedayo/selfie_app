import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useBooks } from '../../../hooks/useBooks'
import Spacer from '../../../components/Spacer'
import ThemedCard from '../../../components/ThemedCard'
import ThemedLoader from '../../../components/ThemedLoader'
import ThemedButton from '../../../components/ThemedButton'
import { Colors } from '../../../constants/Colors'

const BooksDetails = () => {
     const [book, setBook] = useState(null)
    const {id} = useLocalSearchParams()
    const {getbooksbyId, deletebook} = useBooks()
    const router = useRouter()


    const handleDelete = async () => {
       await deletebook(id)
       setBook(null)
       router.replace("/books")
    } 

    useEffect(() => {
         async function loadbook(){
            const bookData = await getbooksbyId(id)
            setBook(bookData)
         }

         loadbook()
    }, [id])

    if(!book){
        return (
            <ThemedView safe={true} style={styles.container}>
               <ThemedLoader />
            </ThemedView>
        )
    }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
      <ThemedText>Written by {book.author}</ThemedText>
      <Spacer />

      <ThemedText title={true}>Book description:</ThemedText>
      <Spacer height={10}/>
        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>

      <ThemedButton style={styles.delete} onPress={handleDelete}>
        <Text style={{color: "#fff", textAlign:"center"}}>Delete book</Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default BooksDetails

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "stretch"
    },

    title :{
        fontSize:22,
        marginVertical:10
    },
    card:{
        margin:20
    },
    delete:{
        backgroundColor : Colors.warning,
        alignSelf : "center",
        width:200,
        marginTop: 40
    }
})