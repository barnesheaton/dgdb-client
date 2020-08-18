import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

import { withNavigation } from 'react-navigation'

import { colors } from '../utils/colors'
import { Title3, Subhead } from './Text'
import HorizontalLine from './HorizontalLine'
import Label from './Label'

class Card extends React.Component {
  render() {
    const { title, date, label, description, ...props } = this.props

    return (
      <TouchableOpacity {...props}>
        <View style={styles.container}>
          {title && <Title3 b>{title}</Title3>}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 4
            }}
          >
            {label && (
              <Label
                color={label === 'Blog' ? colors.red : 'green'}
                style={{ marginRight: 4 }}
              >
                {label}
              </Label>
            )}
            {date && <Subhead>Posted: {date}</Subhead>}
          </View>
          <HorizontalLine />
          <Text>{props.description}</Text>
          <View style={{ alignItems: 'center' }}>{props.children}</View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default withNavigation(Card)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    padding: 10,
    margin: 4,
    marginVertical: 16,
    borderRadius: 6,
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  post: {
    flexShrink: 1,
    alignItems: 'center'
  }
})
