import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, WebView, Text , Linking} from 'react-native';
import { Image } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

var DEFAULT_URL = 'https://goo.gl/maps/XCr6vQ3DY5L9oB9j8';

handleClick = () => {
  Linking.canOpenURL(DEFAULT_URL).then(supported => {
    if (supported) {
      Linking.openURL(DEFAULT_URL);
    } else {
      console.log("Don't know how to open URI: " + DEFAULT_URL);
    }
  });
};

  export default function SettingsScreen() {


    return (
      <SafeAreaView style={styles.maincontainer}>
        <View style={styles.container}>
          <View style={styles.SLMcontainer}>
            <Text style={styles.SLM}>SLM</Text>
            <Text style={styles.Text19}>'19</Text>
          </View>
          <ScrollView style={styles.BottomContainer}
            contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator='false' >

            <View style={styles.detailscontainer}>

              <Text style={styles.detailtext}>
                Hotels.. Transportation? Heck, we've even got the weather for you here
              </Text>

              <Text style={styles.subheading}>Directions</Text>
              <TouchableOpacity onPress={this.handleClick}>
                <Image
                  source={require('../assets/images/RTPMap.png')}
                  style={styles.images}
                />
              </TouchableOpacity>






            </View>


          </ScrollView>

        </View>
      </SafeAreaView>
    );
  }

  SettingsScreen.navigationOptions = {
    header: null,
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
    images: {
      marginTop: 10,
      width: 330,
      height: 200
    },
    maintext: {
      fontSize: 20
    },
    maincontainer: {
      flex: 1,
      backgroundColor: '#fff',
      marginRight: 20
    },
    container: {
      flex: 1

    },
    BottomContainer: {
      height: 400,

    },
    SLMcontainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: 240,

      marginTop: 20

    },
    SLM: {
      flex: 1,
      marginLeft: 20,
      marginTop: 10,
      fontSize: 50,
      fontFamily: 'GothamSSm',
    },
    Text19: {
      flex: 1,
      fontSize: 35,
      marginTop: 24,

    },
    detailscontainer: {
      fontSize: 50,
      marginLeft: 20,
      marginTop: 5

    },
    detailtext: {

      fontSize: 20
    },
    subheading: {
      opacity: .5,
      marginTop: 25,
      marginBottom: 10
    },
    map: {

      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }


  });
