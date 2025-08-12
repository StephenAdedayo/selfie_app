import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import dark from '../assets/img/logo_dark.png'
import light from '../assets/img/logo_light.png'

const ThemedLogo = () => {

    const colorScheme = useColorScheme()

    const logo = colorScheme === "dark" ? dark : light

  return (
    <Image source={logo}/>
  )
}

export default ThemedLogo

const styles = StyleSheet.create({})