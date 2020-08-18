import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class SearchView extends React.Component {
  render() {
    // const { isLoading, error, data } = this.props
    // if (isLoading || error) return <View style={styles.container} />

    return (
      <View style={styles.container}>
        <Text>Search or Filter</Text>
      </View>
    )
  }
}

export default SearchView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 10
  }
})
