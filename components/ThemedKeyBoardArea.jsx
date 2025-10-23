import { KeyboardAvoidingView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedKeyBoardArea = ({style, safe=false, ...props}) => {

    const colorScheme = useColorScheme()
    const insets = useSafeAreaInsets()

    const theme =  Colors[colorScheme] ?? Colors.light

    if(!safe)(
   <KeyboardAvoidingView style={[{backgroundColor : theme.background}, style]} {...props}/>

    )

  return (
     <KeyboardAvoidingView style={[{backgroundColor : theme.background, paddingTop:insets.top, paddingBottom : insets.bottom}, style]} {...props}/>
  )
}

export default ThemedKeyBoardArea

const styles = StyleSheet.create({})