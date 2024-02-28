import { Text, StyleSheet } from 'react-native'
import React from 'react'

const ReusableText = ({ text, family, size, color, alignText }) => {
  return (
    <Text style={styles.textStyle(family, size, color, alignText)}>{text}</Text>
  )
}

export default ReusableText

const styles = StyleSheet.create({
  textStyle: (family, size, color, alignText) => ({
    fontFamily: family,
    fontSize: size,
    color: color,
    textAlign: alignText
  })
})
