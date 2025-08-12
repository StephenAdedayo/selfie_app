import { StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import dark from '../assets/img/logo_dark.png'
import light from '../assets/img/logo_light.png'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'


const Home = () => {
  return (
    <ThemedView style={styles.container}>

    <ThemedLogo source={light} />
      <ThemedText style={styles.title} title={true}>Your Number 1</ThemedText>
      <Spacer height={10}/>
      <ThemedText>Reading List App</ThemedText>
      <Spacer height={20}/>

      {/* <View style={styles.card}>
        <Text>Hello, this is a card</Text>
      </View> */}
      <Link href={'/login'} style={styles.link}><ThemedText>Login page</ThemedText></Link>
      <Link href={'/register'} style={styles.link}><ThemedText>Register page</ThemedText></Link>
      <Link href={'/profile'} style={styles.link}><ThemedText>Profile page</ThemedText></Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },
    title : {
        fontWeight : "bold",
        fontSize : 18
    },
    // card: {
    //     backgroundColor : "#eee",
    //     boxShadow : "4px 4px rgba(0, 0, 0, 0.1)",
    //     borderRadius : 5,
    //     padding : 20
    // }
    // img : {
    //     marginVertical : 20
    // },
    link : {
        marginVertical : 20,
        borderBottomWidth : 1
    }
})