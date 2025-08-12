import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'

const Login = () => {

    const submitHandler = () => {
        console.log("Login form submitted");
        
    }

  return (
    <ThemedView style={styles.container}>
      <Spacer />
     
     <ThemedText title={true} style={styles.title}>Login to your Account</ThemedText>
      <Spacer height={100}/>
             
            <ThemedButton onPress={submitHandler}>
            <Text style={{textAlign : "center", color : "#f2f2f2"}}>Login</Text>
          </ThemedButton>
      <Link href={'/register'}>
      <ThemedText style={{ textAlign : "center" }}>Register instead</ThemedText></Link>

    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems:"center"
    },
    title : {
        textAlign : "center",
        fontSize : 18,
        marginBottom : 30
    },
   
})