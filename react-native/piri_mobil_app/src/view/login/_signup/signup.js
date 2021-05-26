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
  Alert,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import useGlobalStyles from '../../../core/app/style/app_styles';
import TouchableScale from 'react-native-touchable-scale';
import { signup } from '../../../core/app/image/imageconstant';
import { connect } from 'react-redux';
import { setLoginUserAdd } from '../../redux/actions/useraction';

const SignupPage = props => {
  const mystyles = useGlobalStyles();
  const { dark, colors } = useTheme();
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secure, setSecure] = React.useState(true);
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [address, setAddress] = React.useState('');
  const { navigation } = props;

  function changeSecure() {
    setSecure(!secure);
  }

  React.useEffect(() => {
    console.log(props)
  }, [])

  return (
    <SafeAreaView style={[mystyles.container]}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={dark ? 'light-content' : 'dark-content'}
        animated={true}
        hidden={false}
      />
      {
        !props.isLoading ? (
          <ScrollView>
            <View style={[mystyles.container, mystyles.justify_content_spacebetween]}>
              <View style={[mystyles.margin_all_20, mystyles.align_item_center]}>
                <Text style={[mystyles.textcolor, { fontSize: 20 }]}>
                  Create Account
                </Text>
              </View>
              <View
                style={[
                  mystyles.padding_all_20,
                  {
                    height: height * 0.9,
                    backgroundColor: colors.card,
                  },
                  mystyles.bottom_sheet_design,
                ]}>
                <View style={{ height: 80, alignItems: 'center' }}>
                  <Image style={{ width: 80, height: 80 }} resizeMode="contain" source={signup} />

                </View>
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

                <View style={[mystyles.textfieldContainer]}>
                  <TextInput
                    onChangeText={text => setUsername(text)}
                    value={username}
                    placeholder="Enter username"
                    style={[mystyles.textcolor, mystyles.width_100]}
                    returnKeyType="done"></TextInput>
                </View>

                <View style={[mystyles.textfieldContainer]}>
                  <TextInput
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder="Enter name"
                    style={[mystyles.textcolor, mystyles.width_100]}
                    returnKeyType="done"></TextInput>
                </View>

                <View style={[mystyles.textfieldContainer]}>
                  <TextInput
                    onChangeText={text => setAddress(text)}
                    value={address}
                    placeholder="Enter addres"
                    style={[mystyles.textcolor, mystyles.width_100]}
                    returnKeyType="done"></TextInput>
                </View>

                <TouchableScale
                  activeScale={0.9}
                  useNativeDriver={false}
                  tension={50}
                  friction={7}
                  style={[mystyles.margin_all_20]}
                  onPress={() =>

                    props.setLoginUserAdd({
                      "name": name,
                      "username": username,
                      "email": mail,
                      "password": password,
                      "longitude": 39.950662864,
                      "latitude": 32.825663364,
                      "imageUrl" :"https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
                      "address" : address
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
                      SAVE
                    </Text>
                  </View>

                  {
                    props.addUser != "" ? <Text>Başarılı</Text> : <Text></Text>
                  }
                  {
                    props.err != "" ? Alert.alert(props.err) : <></>
                  }
                </TouchableScale>
                <View
                  style={[
                    mystyles.flex_direction_row,
                    mystyles.justify_content_center,
                  ]}>
                  <Text style={[mystyles.textcolor, mystyles.margin_horizontal_10]}>
                    I have account,
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Signin')
                    }}
                  >
                    <Text
                      style={[
                        mystyles.textcolor,
                        { textAlign: 'center', color: colors.border },
                      ]}>
                      Signin
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        ) : (<View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>)
      }
    </SafeAreaView>
  );
};


const mapStateToProps = state => {
  return {
    addUser: state.addUser,
    isLoading: state.isLoading,
    err: state.err
  }
}

export default connect(mapStateToProps, { setLoginUserAdd })(SignupPage);
