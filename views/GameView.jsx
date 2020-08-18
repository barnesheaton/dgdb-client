import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import LoadingView from './LoadingView'

class GameView extends React.Component {
  render() {
    console.log('ON GAME VIEW', this.props)

    if (this.props.data.loading) {
      return <LoadingView />
    }

    return (
      <View style={styles.container}>
        <Text>Game!</Text>
      </View>
    )
  }
}

const GAME_QUERY = gql`
  query optionalName($id: ID!) {
    getGame(id: $id) {
      _id
      description
      name
      min_players
    }
  }
`

export default graphql(GAME_QUERY, {
  options: props => ({ variables: { id: props.navigation.state.params.id } })
})(GameView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10
  }
})
