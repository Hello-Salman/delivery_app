import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUnistyles } from 'react-native-unistyles'
import { emptyStyles } from '@unistyles/emptyStyles'

const DiningScreen = () => {
  const {styles} = useUnistyles(emptyStyles);  
  return (
    <View style={styles.container(false)}>
      <Image 
        source={require('@assets/images/coming_soon.jpg')}
        style={styles.emptyImage}
      />
    </View>
  );
};

export default DiningScreen