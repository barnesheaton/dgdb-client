import React from 'react'
import { StyleSheet, View } from 'react-native'

import withQuery from '../components/withQuery'

class GameView extends React.Component {
  render() {
    const { isLoading, error, data } = this.props
    if (isLoading || error) return <View style={styles.container} />

    return <View style={styles.container}></View>
  }
}

export default withQuery(GameView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10
  }
})
