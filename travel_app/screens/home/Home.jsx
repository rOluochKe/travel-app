import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import reusable from '../../components/Reusable/reusable.style'
import { HeightSpacer, Places, Recommendations, ReusableText } from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import styles from './home.style'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusable.container}>

      <View>
        <View style={reusable.rowWithSpace('space-between')}>
          <ReusableText
            text={'Hey User!'}
            family={'regular'}
            size={TEXT.large}
            color={COLORS.black}
          />

          <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.box}>
            <AntDesign name='search1' size={26} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.xLarge} />

        <ReusableText
          text={'Places'}
          family={'medium'}
          size={TEXT.large}
          color={COLORS.black}
        />

        <Places  />

        <HeightSpacer height={15} />

        <Recommendations />

      </View>
    </SafeAreaView>
  )
}

export default Home