import { Colors } from '@unistyles/Constants';
import { FC, ReactNode } from 'react';
import { SafeAreView, StyleSheet, View, ViewStyle } from 'react-native';

interface CustomSafeAreViewProps {
    children: ReactNode;
    style?: ViewStyle;
}

const CustomSafeAreView: FC<CustomSafeAreViewProps> = ({ children, style }) => {
    return (
        <View style={[styles.container, style]}>
            <SafeAreView />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
});

export default CustomSafeAreView;