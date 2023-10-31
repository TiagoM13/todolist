import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import THEME from '@/theme'
import { styles } from './styles'

export const ActionButton = ({ actions }) => {
  return (
    <View style={styles.buttonsContent}>
      {/* button edit */}
      <TouchableOpacity activeOpacity={0.7} onPress={actions.update}>
        <MaterialCommunityIcons
          name="playlist-edit"
          size={25}
          color={THEME.COLORS.YELLOW}
        />
      </TouchableOpacity>

      {/* button delete */}
      <TouchableOpacity activeOpacity={0.7} onPress={actions.delete}>
        <MaterialIcons name="delete" size={25} color={THEME.COLORS.YELLOW} />
      </TouchableOpacity>
    </View>
  )
}
