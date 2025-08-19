import { ActivityIndicator, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import ThemedView from './ThemedView'

const ThemedLoader = () => {

    const colorScheme = useColorScheme()

    const theme = Colors[colorScheme] ?? Colors.light
 
  return (
    <ThemedView style={{ flex: 1, alignItems : "center", justifyContent:"center" }}>
   <ActivityIndicator size="large" color={theme.text}/>
   </ThemedView>
  )
}

export default ThemedLoader

const styles = StyleSheet.create({})