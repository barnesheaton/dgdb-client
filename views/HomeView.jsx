import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Card from '../components/Card'
import { TextButton } from '../components/Button'

class HomeView extends React.Component {
  render() {
    if (this.props.data.loading) {
      return <Text>Loading</Text>
    }
    console.log('props', this.props)
    return (
      <View style={styles.container}>
        <TextButton title="Hello?" />
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {this.props.data.games &&
            this.props.data.games.map((game, index) => {
              return <Card key={index} title={game.name} />
            })}
        </ScrollView>
      </View>
    )
  }
}

const GAMES_QUERY = gql`
  query GamesQuery {
    games {
      name
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
