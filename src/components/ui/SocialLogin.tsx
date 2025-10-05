import { View, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import { useUnistyles } from 'react-native-unistyles';
import { phoneStyles } from '@unistyles/phoneStyles';
import Icon from '@components/global/Icon'
import { RFValue } from 'react-native-responsive-fontsize';

const SocialLogin: FC = () => {
  const {styles} = useUnistyles(phoneStyles);  

  return (
    <View style={styles.sosialContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image 
          source={require('@assets/icons/google.png')}
          style={styles.gimg}  
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon 
          name="logo-apple"
          iconFamily="Ionicons"
          color="#222"
          size={RFValue(18)}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon 
          name="ellipsis-horizontal-sharp"
          iconFamily="Ionicons"
          color="#222"
          size={RFValue(18)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin