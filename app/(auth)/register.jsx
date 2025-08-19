import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser'
import { Colors } from '../../constants/Colors'

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    
    const { register} = useUser()
 

        
     const submitHandler = async () => {
      setError(null)
        try {
           await register(email, password) 
           
        } catch (error) {
            setError(error.message)
        }        
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
      <Spacer />
     
     <ThemedText title={true} style={styles.title}>Register for an Account</ThemedText>
      <Spacer height={10}/>

      <ThemedTextInput placeholder='Email' style={{width: "80%", marginBottom:20}} keyboardType="email-address" onChangeText={setEmail} value={email}/>

      <ThemedTextInput placeholder='Password' style={{width: "80%", marginBottom:20}}  onChangeText={setPassword} value={password} secureTextEntry/>
        
        <ThemedButton onPress={submitHandler}>
            <Text style={{textAlign : "center", color : "#f2f2f2"}}>Register</Text>
          </ThemedButton>
          <Spacer />
            {error && <Text style={styles.error}>{error}</Text> }
        <Spacer height={40}/>

      <Link href={'/login'}>
      <ThemedText style={{ textAlign : "center" }}>Login instead</ThemedText></Link>

    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Register

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