import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'


const ThemedView = ({style, safe= false, ...prop}) => {
 const colorScheme = useColorScheme()
 const theme = Colors[colorScheme] ?? Colors.light
  
//  use safe = false for those pages that doesn't require a safeAreaview
 if(!safe) return ( 
 <View style={[{backgroundColor : theme.background}, style]} {...prop} />
  )

//   use for those view that requires a safeAreaview because not all pages require a safe area view
   const insets = useSafeAreaInsets()

  return (
    <View
    style={[{backgroundColor : theme.background, paddingTop:insets.top, paddingBottom:insets.bottom}, style]} 
    {...prop} 
    />  
)
}

export default ThemedView

const styles = StyleSheet.create({})