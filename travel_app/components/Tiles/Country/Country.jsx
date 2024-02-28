import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ReusableText, NetworkImage, HeightSpacer } from '../../../components'
import { COLORS, TEXT } from '../../../constants/theme'

const Country = ({ item }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Country Details')}>
      <View>

        <NetworkImage
          source={item.imageUrl}
          width={85}
          height={85}
          borderRadius={12}
        />

        <HeightSpacer height={5} />

        <ReusableText
          text={item.country}
          family={'medium'}
          size={TEXT.medium}
          color={COLORS.black}
          alignText={'center'}
        />
      </View>
    </TouchableOpacity>
  )
}

export default Country

const styles = StyleSheet.create({})