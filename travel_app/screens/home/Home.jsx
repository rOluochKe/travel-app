import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import reusable from '../../components/Reusable/reusable.style'
import { HeightSpacer, ReusableText } from '../../components'
import Places from '../../components/Home/Places'
import Recommendations from '../../components/Home/Recommendations'
import BestHotels from '../../components/Home/BestHotels'
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

        <Places />

        <HeightSpacer height={15} />

        <Recommendations />

        <HeightSpacer height={15} />

        <BestHotels />

      </View>
    </SafeAreaView>
  )
}

export default Home