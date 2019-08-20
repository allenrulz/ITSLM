import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from 'react-native';
import { Image } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';


import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (

    <SafeAreaView style={styles.maincontainer}>
      <ScrollView
        style={styles.BottomContainer}
        contentContainerStyle={styles.contentContainer}>
        <ImageBackground source={require('../assets/images/background.png')} style={{ width: '100%', height: '100%',flex:1 }}>
          <View style={styles.container}>
            <View style={styles.SLMcontainer}>
              <Text style={styles.SLM}>SLM</Text>
              <Text style={styles.Text19}>'19</Text>
            </View>

            <View style={styles.datecontainer}>
              <Text style={styles.datetext}>
                October 15 - 17
              </Text>
              <Text style={styles.addresstext}>
                Research Triangle Park
              </Text>
              <Text style={styles.addresstext}>
                NetApp
              </Text>

            </View>
            <View style={styles.detailscontainer}>
              <Text style={styles.detailtext}>
                Every year, NetApp organizes an IT Senior Leaders event, bringing together
                IT Senior Management for a week of Goal Setting and celebrating achievement.

              </Text>


            </View>

          </View>
        </ImageBackground>
        <View style={styles.imagescontainer}>

          <Text style={styles.imagesheader}>
            Few Highlights from SLM 2018

          </Text>

          <Image
            source={require('../assets/images/SLM1.jpg')}
            style={styles.images}
          />
          <Image
            source={require('../assets/images/SLM2.jpg')}
            style={styles.images}
          />
          <Image
            source={require('../assets/images/SLM3.jpg')}
            style={styles.images}
          />
          <Image
            source={require('../assets/images/SLM4.jpg')}
            style={styles.images}
          />






        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({

  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
    //marginRight: 20,
    fontFamily: 'GothamSSm-Black',
    


  },
  container: {
    flex: 1,
    

  },
  BottomContainer: {
    height: 400,

  },
  SLMcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 240,

    marginTop: 20,
    marginBottom: 30

  },
  SLM: {
    flex: 1,
    marginLeft: 20,
    marginTop: 10,
    fontSize: 50,
    fontFamily: 'GothamSSm',
    color: '#fff'

  },
  Text19: {
    flex: 1,
    fontSize: 35,
    marginTop: 24,
    color: '#fff'
  },
  datecontainer: {
    flex: 1,
    marginLeft: 20,
    marginBottom: 50

  },
  datetext: {
    fontSize: 20,
    color: '#fff'
  },
  addresstext: {
    color: '#fff'
  },
  detailscontainer: {
    fontSize: 50,
    marginLeft: 20,
    marginTop: 10

  },
  detailtext: {

    fontSize: 20,
    color: '#fff',
    paddingBottom: 30
  },
  imagescontainer:{
    
    marginTop: 20,
    marginLeft:20,
    marginRight: 20

  },
  images:{
    marginTop: 10,
    width:330,
    height:200
  },
  imagesheader:{
    fontSize:20,
    marginBottom:20,
    opacity: .9,
    //marginLeft: 20
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
