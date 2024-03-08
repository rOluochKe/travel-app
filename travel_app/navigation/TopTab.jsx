import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TopBookings, TopInfo, TopTrips } from '../screens'
import { COLORS, SIZES } from '../constants/theme'
import { HeightSpacer, NetworkImage, ReusableText } from '../components'
import AppBar from '../components/Reusable/AppBar'

const Tab = createMaterialTopTabNavigator()

const TopTab = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: COLORS.lightWhite}}>
        <View>
          <NetworkImage
            source={
              '../assets/images/bg2.png'
            }
            width={'100%'}
            height={300}
            borderRadius={0}
          />

          <AppBar
            top={40}
            left={20}
            right={20}
            title={'User Dashboard'}
            color={COLORS.white}
            color1={COLORS.white}
            icon={'logout'}
            onPress={() => navigation.goBack()}
            onPress1={() => {}}
          />

          <View style={styles.profile}>
            <Image
              source={{uri: 'http://my-bucket.s3-ap-southeast-2.amazonaws.com/uploaded-photos/imag-1.jpg'}}
              style={styles.image}
            />

            <HeightSpacer height={5} />

            <View style={styles.name}>
              <View style={{alignItems: 'center'}}>
                <ReusableText
                  text={'John Doe'}
                  family={'medium'}
                  size={SIZES.medium}
                  color={COLORS.white}
                />
              </View>
            </View>

            <HeightSpacer height={5} />

            <View style={{alignItems: 'center'}}>
              <ReusableText
                text={'john.doe@gmail.com'}
                family={'medium'}
                size={SIZES.medium}
                color={COLORS.black}
              />
            </View>

          </View>
        </View>
      </View>

      <Tab.Navigator>
        <Tab.Screen name='Bookings' component={TopBookings} />
        <Tab.Screen name='Trips' component={TopTrips} />
        <Tab.Screen name='Info' component={TopInfo} />
      </Tab.Navigator>
    </View>
  )
}

export default TopTab

const styles = StyleSheet.create({
  profile: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 110,
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: 100,
    height: 100,
    borderColor: COLORS.lightWhite,
    borderWidth: 2,
    borderRadius: 90
  },
  name: {
    backgroundColor: COLORS.lightBlue,
    padding: 6,
    borderRadius: 12
  }
})
