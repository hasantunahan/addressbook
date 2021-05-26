import React from 'react';
import { View, SafeAreaView, Text, ScrollView, StatusBar, ActivityIndicator, Modal, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HeaderPartial from '../../../_header/_header';
import useGlobalStyles from '../../../../core/app/style/app_styles';
import { connect } from 'react-redux';
import { getUserList } from '../../../redux/actions/useraction';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import TouchableScale from 'react-native-touchable-scale';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

MaterialIcons
const ProfileView = props => {
    const mystyles = useGlobalStyles();
    const { dark, colors } = useTheme();


    return (
        <SafeAreaView style={mystyles.container}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle={dark ? 'light-content' : 'dark-content'}
                animated={true}
                hidden={false}
            />
            <HeaderPartial></HeaderPartial>

            <View style={[mystyles.margin_horizontal_20]}>
                <Text style={[mystyles.very_big_title]}>MY PROFILE ☺️</Text>
            </View>

            <View style={[mystyles.margin_all_20]}>


                <View style={[mystyles.flex_direction_row]}>
                    <Avatar
                        size="large"
                        rounded
                        source={{
                            uri: props.loginUser.user.imageUrl
                        }}
                    />
                    <View style={[mystyles.margin_horizontal_10, mystyles.justify_content_center]}>
                        <Text style={[mystyles.textcolor]}>
                            {props.loginUser.user.name}
                        </Text>
                        <Text style={[mystyles.textcolor]}>
                            {props.loginUser.user.username}
                        </Text>
                        <Text style={[mystyles.textcolor]}>
                            {props.loginUser.user.email}
                        </Text>
                    </View>
                </View>
                <View style={[mystyles.flex_direction_row, mystyles.align_item_center]}>
                    <Ionicons name="location" color={colors.primary} />
                    <Text style={[mystyles.textcolor, mystyles.margin_horizontal_10]}>
                        {props.loginUser.user.address}
                    </Text>
                </View>

            </View>




        </SafeAreaView>
    );
};

const mapStateToProps = state => {
    return {
        users: state.users,
        isLoading: state.isLoading,
        err: state.err,
        loginUser: state.loginUser,
    }
}


export default connect(mapStateToProps, { getUserList })(ProfileView);
