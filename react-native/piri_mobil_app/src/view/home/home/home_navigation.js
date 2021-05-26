
import React from 'react';
import HomeView from '../_homepartial/home/home_view';
import ProfileView from '../_homepartial/home/profile';


import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import useGlobalStyles from '../../../core/app/style/app_styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const Tab = createBottomTabNavigator();

const HomeNavigation = ({navigation}) => {
    const mystyles = useGlobalStyles();
    return (
        <View style={[mystyles.container]}>
            <Tab.Navigator
                initialRouteName="Home"

                tabBarOptions={{
                    style: {
                        borderTopWidth: 0,
                        alignSelf: 'center',
                        width: '90%',
                        backgroundColor: useTheme().colors.card,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        marginBottom: 0,
                        justifyContent: 'center'

                    },
                    labelPosition: 'beside-icon',
                    showLabel: false,
                    activeTintColor: useTheme().colors.border,
                }}>
                    <Tab.Screen
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons style={{ justifyContent: 'space-evenly', }} name="home" color={color} size={20} />
                        ),
                    }}
                    name="Home"
                    initialParams={true}
                    
                    component={HomeView} />

                    <Tab.Screen
                    initialParams={true}

                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons style={{ justifyContent: 'space-evenly', }} name="person" color={color} size={20} />
                        ),
                    }}
                    name="Search"
                    component={ProfileView} />

                   
                
            </Tab.Navigator>
        </View>
    );
}


export default HomeNavigation;



