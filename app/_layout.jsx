import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../context/UserContext'
import { BooksContextProvider } from '../context/BooksContext'

const RootLayout = () => {

    const colorScheme  =  useColorScheme()
    const theme =  Colors[colorScheme] ?? Colors.light   

  return (
     <UserProvider>
      <BooksContextProvider>
     <StatusBar value="auto"/>
      <Stack screenOptions={{
        headerStyle : {backgroundColor : theme.navBackground},
        headerTintColor : theme.title
      }}>
        <Stack.Screen name='index' options={{title : "Home"}}/>
        <Stack.Screen name='(auth)' options={{headerShown : false}}/>
        <Stack.Screen name='(dashboard)' options={{headerShown : false}}/>
        <Stack.Screen name='about' options={{title : "About"}}/>
        <Stack.Screen name='contact' options={{title : "Contact", headerShown : false}} />
      </Stack>
      </BooksContextProvider>
      </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})