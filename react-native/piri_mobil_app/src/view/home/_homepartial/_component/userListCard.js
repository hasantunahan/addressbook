import React from 'react';
import  {View,Text} from 'react-native';
import useGlobalStyles from '../../../../core/app/style/app_styles';
import TouchableScale from 'react-native-touchable-scale';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { withNavigation } from 'react-navigation';
const UserListCard = ({data,navigation})=> {
    const mystyles = useGlobalStyles();
  const { dark, colors } = useTheme();
    return (
        <View>
            <View style={[mystyles.flex_direction_row, mystyles.margin_all_10, mystyles.justify_content_spacebetween]}>
        <View style={[mystyles.flex_direction_row]}>
          <Avatar
            size="medium"
            rounded
            source={{
              uri: data.imageUrl
            }}
          />
          <View style={[mystyles.margin_horizontal_10, mystyles.justify_content_center]}>
            <Text style={[mystyles.textcolor]}>
              {data.name}
            </Text>
            <Text style={[mystyles.textcolor]}>
              {data.username}
            </Text>
          </View>
        </View>
        <View style={[mystyles.flex_direction_row, mystyles.align_item_center]}>
          <TouchableScale
            activeScale={0.9}
            onPress={()=> navigation.navigate("Update",{
                data : data
            })}
          >
            <MaterialIcons style={{ marginLeft: 5 }} color={colors.text} size={24} name="update" />
          </TouchableScale>
        </View>
      </View>

        </View>
    );

}

export default withNavigation(UserListCard);