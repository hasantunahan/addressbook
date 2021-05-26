import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import useGlobalStyles from '../../core/app/style/app_styles';
import {addresbook} from '../../core/app/image/imageconstant';
import {ApplicationConst} from '../../core/app/constant/application';
import TouchableScale from 'react-native-touchable-scale';
const LoginPage = ({navigation}) => {
  const mystyles = useGlobalStyles();
  const {dark, colors} = useTheme();
  return (
    <SafeAreaView style={mystyles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={dark ? 'light-content' : 'dark-content'}
        animated={true}
        hidden={false}
      />

      <View style={[mystyles.container]}>
        <ScrollView>
          <View style={[mystyles.margin_all_20]}>
            <View
              style={[
                mystyles.align_item_center,
                {height: 300, backgroundColor: colors.card},
                mystyles.margin_vertical_20,
                mystyles.justify_content_center,
                mystyles.border_radius_20,
              ]}>
              <Text
                style={[
                  mystyles.margin_vertical_20,
                  {
                    textAlign: 'center',
                    fontFamily: ApplicationConst.APP_FONT_MEDIUM,
                    fontSize: 26,
                    fontWeight: '500',
                  },
                  mystyles.textcolor,
                ]}>
                ADDRESS BOOK
              </Text>
              <TouchableScale activeScale={0.8}>
                <Image
                  style={[mystyles.top_login_logo]}
                  source={addresbook}
                  resizeMode="contain"></Image>
              </TouchableScale>
            </View>
            <View style={[mystyles.margin_all_20]}>
              <Text style={[mystyles.textcolor, {textAlign: 'center'}]}>
                Welcome to addres book
              </Text>
            </View>

            <TouchableScale
              activeScale={0.9}
              useNativeDriver={false}
              tension={50}
              friction={7}
              style={[mystyles.margin_vertical_10]}
              onPress={() => {
                navigation.navigate('Signin');
              }}>
              <View
                style={[
                  mystyles.padding_all_20,
                  {backgroundColor: colors.border},
                  mystyles.border_radius_10,
                  mystyles.margin_horizontal_10,
                ]}>
                <Text style={[mystyles.textcolor, {textAlign: 'center'}]}>
                  SIGN IN
                </Text>
              </View>
            </TouchableScale>

            <TouchableScale
              activeScale={0.9}
              useNativeDriver={false}
              tension={50}
              friction={7}
              style={[mystyles.margin_vertical_10]}
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              <View
                style={[
                  mystyles.padding_all_20,
                  {backgroundColor: colors.card},
                  mystyles.border_radius_10,
                  mystyles.margin_horizontal_10,
                ]}>
                <Text style={[mystyles.textcolor, {textAlign: 'center'}]}>
                  SIGN UP
                </Text>
                
              </View>
            </TouchableScale>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
