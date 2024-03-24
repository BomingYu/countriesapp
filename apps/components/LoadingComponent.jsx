import { View , Image} from 'react-native'
import React from 'react'

export default function LoadingComponent() {
  return (
    <View className='mt-40'>
        <Image source={require('./../../assets/images/loading-bar.png')} className='w-32 h-32'></Image>
    </View>
  )
}