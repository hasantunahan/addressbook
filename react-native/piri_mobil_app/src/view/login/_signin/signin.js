import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import useGlobalStyles from '../../../core/app/style/app_styles';
import TouchableScale from 'react-native-touchable-scale';
import { login } from '../../../core/app/image/imageconstant';
import { connect } from 'react-redux';
import { isLogin } from '../../redux/actions/useraction';

const SigninPage = props => {
  const mystyles = useGlobalStyles();
  const { dark, colors } = useTheme();
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secure, setSecure] = React.useState(true);
  const [data, setData] = React.useState({});
  const { navigation } = props;
  function changeSecure() {
    setSecure(!secure);
  }

  React.useEffect(() => {
    if (props.loginUser != "") {
      navigation.navigate('Home',{navigation :navigation})
    }
  }, [props.loginUser])

  const logins = () => {

  }

  return (
    <SafeAreaView style={[mystyles.container]}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={dark ? 'light-content' : 'dark-content'}
        animated={true}
        hidden={false}
      />
      <ScrollView>
      <View style={[mystyles.container, mystyles.justify_content_spacebetween]}>
        <View style={[mystyles.margin_all_20, { height: height * .3 }, mystyles.align_item_center, mystyles.justify_content_center]}>
          <Image style={{ maxWidth: 100, maxHeight: 100 }} source={login} resizeMode="contain"></Image>
        </View>

        <View
          style={[
            mystyles.padding_all_20,
            {
              height: height * .7,
              backgroundColor: colors.card,
            },
            mystyles.bottom_sheet_design,
          ]}>
          <Text
            style={[
              mystyles.margin_vertical_30,
              mystyles.textcolor,
              { fontSize: 18 },
              mystyles.text_align_center,
            ]}>
            Login
          </Text>

          <View style={[mystyles.textfieldContainer]}>
            <TextInput
              onChangeText={text => setMail(text)}
              value={mail}
              placeholder="Enter email"
              style={[mystyles.textcolor, mystyles.width_100]}
              returnKeyType="done"></TextInput>
          </View>

          <View style={[mystyles.textfieldContainer]}>
            <TextInput
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={secure}
              returnKeyType="done"
              placeholder="Enter password"
              returnKeyType="done"
              style={[mystyles.textcolor, { width: '96%' }]}></TextInput>
            <TouchableOpacity onPress={changeSecure}>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={require('../../../../assets/images/eye.png')}></Image>
            </TouchableOpacity>
          </View>

          <TouchableScale
            activeScale={0.9}
            useNativeDriver={false}
            tension={50}
            friction={7}
            style={[mystyles.margin_all_20]}
            onPress={() =>
              props.isLogin({
                "email": mail.toLowerCase(),
                "password": password
              })
            }>
            <View
              style={[
                mystyles.padding_all_20,
                { backgroundColor: colors.border },
                mystyles.border_radius_10,
                mystyles.margin_horizontal_10,
              ]}>
              <Text style={[mystyles.textcolor, { textAlign: 'center' }]}>
                SIGN IN
              </Text>
            </View>
          </TouchableScale>
          {
            props.err != "" ? <Text>{props.err.split('login is failed :')}</Text> : <Text></Text>
          }
          {
            props.isLoading ? <Text>loading</Text> : <Text></Text>
          }

          <View
            style={[
              mystyles.flex_direction_row,
              mystyles.justify_content_center,
            ]}>
            <Text style={[mystyles.textcolor, mystyles.margin_horizontal_10]}>
              I dont have account,
            </Text>
            <TouchableOpacity
            onPress={()=> navigation.navigate('Signup')}
            >
              <Text
                style={[
                  mystyles.textcolor,
                  { textAlign: 'center', color: colors.border },
                ]}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>

        </View>
     
     
      </View>
    
    
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    loginUser: state.loginUser,
    isLoading: state.isLoading,
    err: state.err
  }
}

export default connect(mapStateToProps, { isLogin })(SigninPage);
