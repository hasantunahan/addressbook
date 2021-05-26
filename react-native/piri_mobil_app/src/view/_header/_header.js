import { View, Text } from 'react-native';
import React from 'react';
import useGlobalStyles from '../../core/app/style/app_styles';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';



const HeaderPartial = props => {
    const mystyles = useGlobalStyles();
    const {colors} = useTheme();
    React.useEffect(() => {
        console.log(props)
    }, [])

    return (
        <View style={[mystyles.flex_direction_row, mystyles.margin_horizontal_20,mystyles.margin_vertical_30, mystyles.align_item_center, mystyles.justify_content_spacebetween]}>
            <View style={[mystyles.flex_direction_row]}>
                <Avatar
                    rounded
                    source={{
                        uri:props.loginUser.user.imageUrl
                    }}
                />
                <View>
                    <Text style={[mystyles.textcolor, mystyles.margin_horizontal_10]}  >Welcome,</Text>
                    <Text style={[mystyles.subtitle_textstyle, mystyles.margin_horizontal_10]}>{props.loginUser.user.name}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity
                onPress={()=> props.navigation.navigate('AddNew')}
                >
                    <View style={[{backgroundColor:colors.border},mystyles.padding_all_10,mystyles.border_radius_10]}>
                        <Text style={[mystyles.textcolor]}>new User</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const mapStateToProps = state => {
    return {
      loginUser: state.loginUser,
      isLoading: state.isLoading,
      err: state.err,
      navigation :state.navigation
    }
  }

export default connect(mapStateToProps) (withNavigation(HeaderPartial));