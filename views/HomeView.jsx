import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Card from '../components/Card'
import LoadingView from './LoadingView'

class HomeView extends React.Component {
  render() {
    if (this.props.data.loading) {
      return <LoadingView />
    }
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {this.props.data.getGames &&
            this.props.data.getGames.map((game, index) => {
              return (
                <Card
                  key={index}
                  title={game.name}
                  description={game.description}
                  onPress={() => {
                    this.goToGame(game)
                  }}
                />
              )
            })}
        </ScrollView>
      </View>
    )
  }

  goToGame(game) {
    this.props.navigation.navigate('GameModal', { id: game._id })
  }
}

const GAMES_QUERY = gql`
  {
    getGames {
      _id
      description
      name
      min_players
    }
  }
`

export default graphql(GAMES_QUERY)(HomeView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10
  },
  contentContainer: {}
})
