import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useUnistyles } from 'react-native-unistyles';
import { homeStyles } from '@unistyles/homeStyles';
import { useSharedState } from '@features/tabs/SharedContext';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@unistyles/Constants';
import Icon from '@components/global/Icon';
import CustomText from '@components/global/CustomText';

const searchItems: string[] = [
    'Search "Rendang"',
    'Search "Kue"',
    'Search "Ice Cream"',
    'Search "Pizza"',
    'Search "Biryani"',
];

const SearchBar = () => {
  const isVegMode = true;  

  const {styles} = useUnistyles(homeStyles);
  const {scrollYGlobal} = useSharedState();
  
  const textColorAnimation = useAnimatedStyle(() => {
    const textColor = interpolate(scrollYGlobal.value, [0, 80], [255, 0]);
    return {
      color: `rgb(${textColor},${textColor},${textColor})`  
    };
  });

  return (
    <>
      <SafeAreaView />

      <View style={[styles.flexRowBetween, styles.padding]}>
        <TouchableOpacity
          style={styles.searchInputContainer}
          activeOpacity={0.8}>

          <Icon
            iconFamily="Ionicons"
            name="search"
            color={isVegMode ? Colors.active : Colors.primary}
            size={20}
          />

          <RollingContent
            interval={3000}
            defaultStyle={false}
            customStyle={styles.textContainer}>
            {searchItems?.map((item, index) => {
              return (
                <CustomText
                  fontSize={12}
                  fontFamily="Okra-Medium"
                  key={index}
                  style={styles.rollingText}>
                    {item}
                </CustomText>
              );
            })}

          </RollingContent>

        </TouchableOpacity>
      </View>
    </>
  )
}

export default SearchBarMode ? Colors.active : Colors.primary}
            size={20}
          />
        </TouchableOpacity>

        <Pressable
          style={styles.vegMode}
          onPress={() => dispatch(setVegMode(!isVegMode))}>
          <Animated.Text style={[textColorAnimation, styles.animatedText]}>
            VEG
          </Animated.Text>
          <Animated.Text style={[textColorAnimation, styles.animatedSubText]}>
            MODE
          </Animated.Text>

          <Image
            source={
              isVegMode
                ? require('@assets/icons/switch_on.png')
                : require('@assets/icons/switch_off.png')
            }
            style={styles.switch}
          />  
        </Pressable>
      </View>
    </>
  )
}

export default SearchBar