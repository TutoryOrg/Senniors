import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native';

export const App = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    <Text>Hello</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
