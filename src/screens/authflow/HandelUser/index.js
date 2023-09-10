import { View, Text,StatusBar, Image, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppStyles } from '../../../services/utilities/appstyles';
import { firebase } from '@react-native-firebase/firestore';
import { colors } from '../../../services/utilities/colors';
import { Images } from '../../../services/utilities/assets';

const HandelUser = ({ navigation }) => {
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate('app', { screen: 'Home' });
            } else {
                navigation.navigate('Splash');
            }
        });

        return () => unsubscribe();
    }, [navigation]);


    return (
        <View style={AppStyles.handeluserlogo}>
 <StatusBar backgroundColor={'black'} barStyle={'dark-content'} />
            <Image style={AppStyles.logo} source={Images.logo} />

        </View>
    );
}

export default HandelUser