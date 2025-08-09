import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Onboarding = () => {
  return (
   
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
       <View>
        <Text className='text-4xl font-poppinsBold'>Onboarding</Text>
      </View>
      </SafeAreaView>
  )
}

export default Onboarding