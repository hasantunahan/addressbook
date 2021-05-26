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
import TouchableScale from 'react-native-touchable-scale';
import { connect } from 'react-redux';
import useGlobalStyles from '../../../../core/app/style/app_styles';
import {updateUserWithId} from '../../../redux/actions/useraction';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UpdateUserPage = props => {
    const mystyles = useGlobalStyles();
    const { dark, colors } = useTheme();
    const height = Dimensions.get('window').height;
    const [name, setName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const { navigation } = props;

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
                            <View style={[mystyles.margin_all_20]}>
                                <View style={[mystyles.flex_direction_row, mystyles.align_item_center, mystyles.justify_content_spacebetween]}>
                                    <TouchableOpacity
                                    onPress={()=>{
                                         navigation.navigate("Home",{navigation :navigation})}}
                                    >
                                        <Ionicons name="arrow-back" color={colors.text} size={18} />

                                    </TouchableOpacity>
                                    <Text style={[mystyles.textcolor, { fontSize: 20 }]}>
                                        Update This Account
                                    </Text>
                                </View>
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
                                    <Text style={[mystyles.textcolor]}>{props.navigation.state.params.data.name}</Text>
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

                                

                                <TouchableScale
                                    activeScale={0.9}
                                    useNativeDriver={false}
                                    tension={50}
                                    friction={7}
                                    style={[mystyles.margin_all_20]}
                                    onPress={() =>

                                        props.updateUserWithId(props.navigation.state.params.data._id,{
                                            "name" : name,
                                            "username" :username
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
                                            UPDATE
                                        </Text>
                                    </View>

                                    {
                                        props.updateUser != "" ? <Text>Başarılı</Text> : <Text></Text>
                                    }
                                    {
                                        props.err != "" ? Alert.alert(props.err) : <></>
                                    }
                                </TouchableScale>

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
        updateUser: state.updateUser,
        isLoading: state.isLoading,
        err: state.err
    }
}

export default connect(mapStateToProps, {updateUserWithId})(UpdateUserPage);
