import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useUser } from '../../hooks/useUser'
import GuestOnly from '../../components/auth/GuestOnly'

const AuthLayout = () => {

    const {user} = useUser()
    console.log(user);
    

  return (
    <GuestOnly>
    <StatusBar value="auto"/>
   <Stack screenOptions={{headerShown : false, animation : "none"}}/>
   </GuestOnly>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})