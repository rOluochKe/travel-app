import { useFonts } from 'expo-font';
import * as Splashscreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountryDetails, Failed, HotelDetails, HotelList, HotelSearch, Onboarding, Payments, PlaceDetails, Recommended, Search, SelectRoom, SelectedRoom, Settings, Success } from './screens';
import BottomTabNavigation from './navigation/BottomTabNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/fonts/medium.otf'),
    bold: require('./assets/fonts/bold.otf'),
    light: require('./assets/fonts/light.otf'),
    xtrabold: require('./assets/fonts/xtrabold.otf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await Splashscreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Onboard' component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name='Bottom' component={BottomTabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name='Search' component={Search} options={{ headerShown: false }} />
        <Stack.Screen name='Country Details' component={CountryDetails} options={{ headerShown: false }} />
        <Stack.Screen name='Recommended' component={Recommended} options={{ headerShown: false }} />
        <Stack.Screen name='Place Details' component={PlaceDetails} options={{ headerShown: false }} />
        <Stack.Screen name='Hotel Details' component={HotelDetails} options={{ headerShown: false }} />
        <Stack.Screen name='Hotel List' component={HotelList} options={{ headerShown: false }} />
        <Stack.Screen name='Hotel Search' component={HotelSearch} options={{ headerShown: false }} />
        <Stack.Screen name='SelectRoom' component={SelectRoom} options={{ headerShown: false }} />
        <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name='Payments' component={Payments} options={{ headerShown: false }} />
        <Stack.Screen name='Success' component={Success} options={{ headerShown: false }} />
        <Stack.Screen name='Failed' component={Failed} options={{ headerShown: false }} />
        <Stack.Screen name='SelectedRoom' component={SelectedRoom} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
