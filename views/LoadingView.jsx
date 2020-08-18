import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class LoadingView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
