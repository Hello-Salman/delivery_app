import { View, Text, Platform } from 'react-native';
import React from 'react';
import { useUnistyles } from 'react-native-unistyles';
import { homeStyles } from '@unistyles/homeStyles';
import LottieView from 'lottie-react-native';

const Graphics = () => {
  const {styles} = useUnistyles(homeStyles);  

  return (
    <View style={styles.lottieContainer} pointerEvents="none">
      <LottieView 
        enableMergePathsAndroidForKitKatAndAbove
        enableSafeModeAndroid
        style={styles.lottie}
        source={require('@assets/animations/event.json')}
        autoPlay
        loop
        hardwareAccelerationAndroid
      />
    </View>
  )
}

export default Graphics