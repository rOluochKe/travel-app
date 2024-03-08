import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { HeightSpacer, ReusableText } from '../../components'
import { COLORS, SIZES } from '../../constants/theme'

const TopInfo = () => {
  const navigation = useNavigation()

  return (
    <View style={{margin: 20}}>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <ReusableText
          text={'Personal Information'}
          family={'medium'}
          size={SIZES.medium}
          color={COLORS.gray}
        />
        <Feather name='user' size={24} />
      </TouchableOpacity>

      <HeightSpacer height={20} />

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <ReusableText
          text={'Settings'}
          family={'medium'}
          size={SIZES.medium}
          color={COLORS.gray}
        />
        <Feather name='settings' size={24} />
      </TouchableOpacity>

      <HeightSpacer height={20} />

      <TouchableOpacity onPress={() => navigation.navigate('Payments')}>
        <ReusableText
          text={'Payments'}
          family={'medium'}
          size={SIZES.medium}
          color={COLORS.gray}
        />
        <MaterialIcons name="payment" size={24} />
      </TouchableOpacity>
    </View>
  )
}

export default TopInfo

const styles = StyleSheet.create({})