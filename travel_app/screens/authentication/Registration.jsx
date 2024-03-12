import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../constants/theme'
import { HeightSpacer, ReusableBtn, WidthSpacer } from '../../components'

const validationSchema = Yup.object().shape({
  username: Yup.string().min(4, 'Username must be at least 4 characters').required('Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
  email: Yup.string().email('Provide a valid email address').required('Required')
})

const Registration = () => {
  const [loader, setLoader] = useState(false)
  const [response, setResponse] = useState(null)
  const [obsecureText, setObsecureText] = useState(false)

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: '', email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={(value) => {
          console.log(value)
        }}
      >
        {({
          handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          isValid,
          setFieldTouched
        }) => (
          <View style={{paddingTop: 30}}>
            <View style={styles.wrapper}>
              <Text style={styles.label}>Username</Text>
              <View>
                <View style={styles.inputWrapper(touched.username ? COLORS.lightBlue : COLORS.lightGrey)}>
                  <MaterialCommunityIcons name='face-man-profile' size={20} color={COLORS.gray} />
                  <WidthSpacer width={10} />
                  <TextInput
                    placeholder='Enter username'
                    onFocus={() => { setFieldTouched('username') }}
                    onBlur={() => { setFieldTouched('username', '') }}
                    value={values.username}
                    onChangeText={handleChange('username')}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={{flex: 1}}
                  />
                </View>
                {touched.username && errors.username && (
                  <Text style={styles.errorMessage}>{errors.username}</Text>
                )}
              </View>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.label}>Email</Text>
              <View>
                <View style={styles.inputWrapper(touched.email ? COLORS.lightBlue : COLORS.lightGrey)}>
                  <MaterialCommunityIcons name='email-outline' size={20} color={COLORS.gray} />
                  <WidthSpacer width={10} />
                  <TextInput
                    placeholder='Enter email'
                    onFocus={() => { setFieldTouched('email') }}
                    onBlur={() => { setFieldTouched('email', '') }}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={{flex: 1}}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                )}
              </View>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.label}>Password</Text>
              <View>
                <View style={styles.inputWrapper(touched.password ? COLORS.lightBlue : COLORS.lightGrey)}>
                  <MaterialCommunityIcons name='lock-outline' size={20} color={COLORS.gray} />
                  <WidthSpacer width={10} />
                  <TextInput
                    secureTextEntry={obsecureText}
                    placeholder='Enter password'
                    onFocus={() => { setFieldTouched('password') }}
                    onBlur={() => { setFieldTouched('password', '') }}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={{flex: 1}}
                  />

                  <TouchableOpacity onPress={() => {
                    setObsecureText(!obsecureText)
                  }}>
                    <MaterialCommunityIcons
                      name={obsecureText ? 'eye-outline' : 'eye-off-outline'}
                      size={18}
                    />
                  </TouchableOpacity>

                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>
            </View>

            <HeightSpacer height={20} />

            <ReusableBtn
              onPress={handleSubmit}
              btnText={"Register"}
              width={SIZES.width - 40}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />
          </View>
        )}
      </Formik>
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.lightWhite,
  },
  wrapper: {
    marginBottom: 20,
  },
  label: {
    fontFamily: 'regular',
    fontSize: SIZES.small,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: 'right',
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  }),
  errorMessage: {
    color: COLORS.red,
    fontSize: SIZES.small,
    fontFamily: 'regular',
    marginTop: 5,
    marginLeft: 5
  }
})