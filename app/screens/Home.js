import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function Home() {
  return (
    <View style={styles.view}>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
