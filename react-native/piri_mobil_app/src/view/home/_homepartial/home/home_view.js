import React from 'react';
import { View, SafeAreaView, Text, ScrollView, StatusBar, ActivityIndicator, Modal, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HeaderPartial from '../../../_header/_header';
import useGlobalStyles from '../../../../core/app/style/app_styles';
import { connect } from 'react-redux';
import { getUserList } from '../../../redux/actions/useraction';
import UserListCard from '../_component/userListCard';

const HomeView = props => {
  const mystyles = useGlobalStyles();
  const { dark, colors } = useTheme();
  const [modalVisible, setModalVisible] = React.useState(false);
  const { navigation } = props;
  const [data, setData] = React.useState({})

  React.useEffect(() => {
    setData(props.getUserList(props.loginUser.token));
  }, [props.updateUser, props.addUser])

  React.useEffect(() => {
    setData({})
  }, [])
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
      {
        modalVisible ? <View style={styles.centeredView}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Hello World!</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </View> : <View></View>
      }
      <View style={[mystyles.margin_horizontal_20]}>
        <Text style={[mystyles.very_big_title]}>ADDRESS BOOK ☺️</Text>
      </View>

      {
        !props.isLoading ? (
          <ScrollView>
            <View style={[mystyles.margin_all_20]}>
              {
                Array.from(props.users).map(item => {
                  return <UserListCard key={item._id} data={item} />
                })
              }
            </View>
          </ScrollView>) : (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator />
          </View>
        )
      }

    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    isLoading: state.isLoading,
    err: state.err,
    loginUser: state.loginUser,
    updateUser: state.updateUser,
    addUser: state.addUser
  }
}


export default connect(mapStateToProps, { getUserList })(HomeView);
