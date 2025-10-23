import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser'
import ThemedKeyBoardArea from '../../components/ThemedKeyBoardArea'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
     const {login} = useUser()


    const submitHandler = async () => {
        setError(null)
         try {
           await login(email, password) 
           
        } catch (error) {
           setError(error.message)
        }       
    }


    

  return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <ThemedKeyBoardArea safe={true} style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height" }>

      <Spacer />
     
     <ThemedText title={true} style={styles.title}>Login to your Account</ThemedText>
      <Spacer height={10}/>

      <ThemedTextInput placeholder='Email' style={{width: "80%", marginBottom:20}} keyboardType="email-address" onChangeText={setEmail} value={email}/>

      <ThemedTextInput placeholder='Password' style={{width: "80%", marginBottom:20}}  onChangeText={setPassword} value={password} secureTextEntry/>
          

      
             
            <ThemedButton onPress={submitHandler}>
            <Text style={{textAlign : "center", color : "#f2f2f2"}}>Login</Text>
          </ThemedButton>
     <Spacer />
            {error && <Text style={styles.error}>{error}</Text>}

          <Spacer height={40}/>
      <Link href={'/register'}>
      <ThemedText style={{ textAlign : "center" }}>Register instead</ThemedText></Link>
</ThemedKeyBoardArea>
    </TouchableWithoutFeedback> 
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
    error:{
       color : Colors.warning,
       padding : 10,
       backgroundColor: "#f5c1c8",
       borderColor : Colors.warning,
       borderWidth : 1,
       borderRadius : 6,
       marginHorizontal : 10
    }
   
})