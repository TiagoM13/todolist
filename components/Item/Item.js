import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import { Button } from '../Buttton/Button'
import { Checkbox } from '../Checkbox/Checkbox'

import THEME from '../../theme'
import { styles } from './styles'

export function Item(props) {
  const [checked, setChecked] = useState(false)

  function toggleCheckedItem() {
    setChecked(!checked)
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Checkbox checked={checked} onCheck={toggleCheckedItem} />

        <View style={styles.contentContainer}>
          <Text style={styles.time}>{props.time}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </View>

      {/* buttons */}
      <View style={styles.contentContainer}>
        {/* button edit */}
        <Button
          action={() => console.log('Edit Item')}
          icon={
            <MaterialCommunityIcons
              name="playlist-edit"
              size={25}
              color={THEME.COLORS.YELLOW}
            />
          }
        />

        {/* button delete */}
        <Button
          action={() => console.log('Delete Item')}
          icon={
            <MaterialIcons
              name="delete"
              size={25}
              color={THEME.COLORS.YELLOW}
            />
          }
        />
      </View>
    </View>
  )
}
