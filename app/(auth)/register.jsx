import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'

const Login = () => {

     const submitHandler = () => {
        console.log("Register form submitted");
        
    }

  return (
    <ThemedView style={styles.container}>
      <Spacer />
     
     <ThemedText title={true} style={styles.title}>Register for an Account</ThemedText>
      <Spacer height={100}/>
        
        <ThemedButton onPress={submitHandler}>
            <Text style={{textAlign : "center", color : "#f2f2f2"}}>Register</Text>
          </ThemedButton>

      <Link href={'/login'}>
      <ThemedText style={{ textAlign : "center" }}>Login instead</ThemedText></Link>

    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    title : {
        textAlign : "center",
        fontSize : 18,
        marginBottom : 30
    }
})