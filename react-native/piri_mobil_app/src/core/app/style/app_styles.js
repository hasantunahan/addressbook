import {Dimensions, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ApplicationConst} from '../constant/application';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { colors } from 'react-native-elements';
const mystyle = props =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.colors.background,
    },
    position: {
      position: 'absolute',
    },
    width_100: {
      width: '100%',
    },
    width_90_wid: {
      width: Dimensions.get('window').width * 0.9,
    },
    height_10: {
      height: '10%',
    },
    height_100: {
      height: '100%',
    },
    textcolor: {
      color: props.colors.text,
      fontFamily: ApplicationConst.APP_FONT_REGULAR,
    },
    subtitle_textstyle: {
      color: props.colors.text,
      fontWeight: '700',
      fontFamily: ApplicationConst.APP_FONT_MEDIUM,
      fontSize: RFPercentage(1.8),
    },
    very_big_title: {
      width: 250,
      color: props.colors.text,
      fontWeight: '700',
      fontSize: 25,
      fontFamily: ApplicationConst.APP_FONT_BOLD,
    },
    flex_wrap_true: {
      flexWrap: 'wrap',
    },
    flex_08: {
      fontSize: RFPercentage(1.3),
    },
    flex_1: {
      flex: 1,
    },
    flex_2: {
      flex: 2,
    },
    flex_3: {
      flex: 3,
    },
    flex_4: {
      flex: 4,
    },
    flex_5: {
      flex: 5,
    },
    flex_6: {
      flex: 6,
    },
    flex_7: {
      flex: 7,
    },
    flex_7: {
      flex: 7,
    },
    flex_7: {
      flex: 7,
    },
    flex_8: {
      flex: 8,
    },
    flex_9: {
      flex: 9,
    },
    flex_10: {
      flex: 10,
    },
    flex_11: {
      flex: 11,
    },
    flex_direction_row: {
      flexDirection: 'row',
    },
    flex_direction_col: {
      flexDirection: 'column',
    },
    flex_direction_row_reverse: {
      flexDirection: 'row-reverse',
    },
    flex_direction_col_revers: {
      flexDirection: 'column-reverse',
    },
    justify_content_spacebetween: {
      justifyContent: 'space-between',
    },
    justify_content_center: {
      justifyContent: 'center',
    },
    align_item_center: {
      alignItems: 'center',
    },
    align_item_end: {
      alignItems: 'flex-end',
    },
    margin_all_5: {
      margin: 5,
    },
    margin_all_10: {
      margin: 10,
    },
    margin_all_15: {
      margin: 15,
    },
    margin_all_20: {
      margin: 20,
    },
    margin_all_25: {
      margin: 25,
    },
    margin_all_30: {
      margin: 30,
    },
    padding_all_5: {
      padding: 5,
    },
    padding_all_10: {
      padding: 10,
    },
    padding_all_15: {
      padding: 15,
    },
    padding_all_20: {
      padding: 20,
    },
    padding_all_25: {
      padding: 25,
    },
    padding_all_30: {
      padding: 30,
    },
    margin_horizontal_10: {
      marginHorizontal: 10,
    },
    margin_horizontal_20: {
      marginHorizontal: 20,
    },
    margin_vertical_5: {
      marginVertical: 5,
    },
    margin_vertical_10: {
      marginVertical: 10,
    },
    margin_vertical_20: {
      marginVertical: 20,
    },
    margin_vertical_30: {
      marginVertical: 30,
    },
    border_radius_10: {
      borderRadius: 10,
    },
    border_radius_20: {
      borderRadius: 20,
    },
    selected_color: {
      backgroundColor: props.colors.border,
    },
    top_login_logo: {
      width: 180,
      height: 150,
    },
    bg_signin_button: {
      backgroundColor: props.colors,
    },
    bottom_sheet_design: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    text_align_center :{
        textAlign :'center'
    },
    text_align_justify :{
        textAlign :'justify'
    },
    text_align_start :{
        textAlign : 'left'
    },
    textfieldContainer: {
        padding: Platform.OS == 'ios' ? '4%' : '1%',
        backgroundColor: props.colors.card,
        borderColor: props.colors.border,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '3%',
        marginLeft: '10%',
        marginRight: '10%',
        paddingRight: '5%'
    },
    textfield: {
        
    },
  });

function useGlobalStyles() {
  const {colors} = useTheme();
  const styles = React.useMemo(() => mystyle({colors}), [colors]);
  return styles;
}

export default useGlobalStyles;
