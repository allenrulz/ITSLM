import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, SectionList, Text } from 'react-native';
import {Button} from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';
import Polls from '../components/Polls';

function getlistitems() {
  return (<Polls />);
}

export default function LinksScreen() {
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
              Click on each poll to provide your feedback. Polls may not be active always, you will be notified when a poll has been activated for submission

              </Text>


          </View>

          <SectionList
            renderItem={({ item, index, section ,title}) => <Polls poll={item}/>}
            sections={polls}
            keyExtractor={(item, index) => item + index}
          />


        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

LinksScreen.navigationOptions = {
  header: null
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
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
  detailscontainer:{
    fontSize: 50,
    marginLeft:20,
    marginTop: 5

  },
  detailtext:{

    fontSize:20
  },
  buttongroup:{
    marginTop: 50,
    marginBottom: 50,
    
    flexDirection: "row",
    marginLeft:20,
    justifyContent:"space-evenly",
    
  },
  button:{
    width: 100,
    color: '#2d6dde',
    borderRadius: 200

  }

});


const polls = [

  {
    title: 'Testing123',
    data: [
      {
        pollname: 'Post Session Survey',
        color: '#fff8e4',
        question:[
          {
            name:'What is your level of satisfaction for this event?'
          },
          {
            name:'How likely are you to tell a colleague about this event?'
          },
          {
            name:'How likely are you to tell a friend about this event??'
          },
          {
            name:'Describe in few words your experience of the event'
          }
        ]
      },

      



    ]
  }
 










]
