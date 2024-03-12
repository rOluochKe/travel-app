import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { HeightSpacer, ReusableBtn, ReusableText } from '../../components'
import { COLORS, SIZES } from '../../constants/theme'
import ReusableTile from '../../components/Reusable/ReusableTile'

const Failed = ({navigation}) => {
  const hotel =  {
      "_id": "64c674d23cfa5e847bcd5430",
      "country_id": "64c62bfc65af9f8c969a8d04",
      "title": "Seaside Resort",
      "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
      "rating": 4.9,
      "review": "1204 Reviews",
      "location": "Miami Beach, FL"
    }

  return (
    <View>
      <View style={{marginTop: '40%'}}>
        <Image
          source={require('../../assets/images/Falied.png')}
          style={{width: '100%', height: 200, resizeMode: 'contain'}}
        />
        <HeightSpacer height={40} />

        <View style={{alignItems: 'center'}}>
          <ReusableText
            text={'Booking Failed'}
            family={'medium'}
            size={SIZES.xLarge}
            color={COLORS.black}
          />
          <HeightSpacer height={20} />

          <ReusableText
            text={'You can find your booking details below'}
            family={'regular'}
            size={SIZES.medium}
            color={COLORS.gray}
          />
          <HeightSpacer height={20} />
        </View>

        <View style={{margin: 20}}>
          <ReusableText
            text={'Room Details'}
            family={'bold'}
            size={SIZES.medium}
            color={COLORS.dark}
          />
          <HeightSpacer height={20} />

          <ReusableTile
            item={hotel}
          />
          <HeightSpacer height={40} />

          <ReusableBtn
            onPress={() => navigation.goBack()}
            btnText={"Try Again"}
            width={SIZES.width - 50}
            backgroundColor={COLORS.red}
            borderColor={COLORS.red}
            borderWidth={0}
            textColor={COLORS.white}
          />
        </View>
      </View>
    </View>
  )
}

export default Failed

const styles = StyleSheet.create({})