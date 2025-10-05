import { View, Text, Platform, FlatList } from 'react-native'
import React, { FC } from 'react'
import { useRoute } from '@react-navigation/native';
import { useUnistyles } from 'react-native-unistyles';
import { restaurantHeaderStyles } from '@unistyles/restuarantStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomSafeAreView from '@components/global/CustomSafeAreaView';
import SortingAndFilters from '@components/home/SortingAndFilters';
import { restaurantItemsData, restaurantsItemfiltersOption } from '@utils/dummyData';
import RestaurantHeader from '@components/restaurant/RestaurantHeader';
import DottedLine from '@components/ui/DottedLine';
import FoodCard from '../../components/restaurant/FoodCard';
import SearchAndOffers from '@components/restaurant/SearchAndOffers';

const RestaurantScreen: FC = () => {

  const route = useRoute() as any;
  const restaurants = route?.params?.item;
  const {styles} = useUnistyles(restaurantHeaderStyles);
  const insets = useSafeAreaInsets();

  const renderItem = ({ item }: any) => {
    return (
      <FoodCard item={item} restaurant={restaurants}/>
    )
  }

  return (
    <>
      <View style={{height: Platform.OS === 'android' ? insets.top : 0}}/>
      <CustomSafeAreView>
        <RestaurantHeader title={restaurants?.name}/>

        <View style={styles.sortingContainer}>
          <SortingAndFilters 
            menuTitle="Filter"
            options={restaurantsItemfiltersOption}
          />
        </View>

        <FlatList
          data={restaurantItemsData}
          renderItem={renderItem}
          scrollEventThrottle={16}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View style={styles.mainPadding}>
              <DottedLine />
            </View>
          )}
          contentContainerStyle={styles.scrollContainer}
        />

        <SearchAndOffers item={restaurants} />
      </CustomSafeAreView>
    </>
  );
};

export default RestaurantScreen;