import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, SectionList, Text } from 'react-native';
import {Button} from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';
import Sessions from '../components/Sessions';

function getlistitems() {
  return (<Sessions />);
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
              The schedule can be updated up until the event, so check back often and opt-in to 
              recieve notifications. All signed in users can bookmark events and rate sessions.

              </Text>


          </View>

          <View style={styles.buttongroup}>
            <Button title="Day 1" buttonStyle={styles.buttonpressed}></Button>
            <Button title="Day 2" buttonStyle={styles.buttonpressed}></Button>
            <Button title="Day 3" buttonStyle={styles.button}></Button>
          </View>
          <SectionList
            renderItem={({ item, index, section }) => <Sessions session={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={{ opacity: .7,marginBottom: 10,marginLeft:20 }}>{title}</Text>
            )}
            sections={sessions}
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

  },
  buttonpressed:{
    width: 100,
    color: 'lighblue',
    borderRadius: 200
  }

});


const sessions = [

  {
    title: 'Tuesday, October 15',
    data: [
      {
        sessionname: 'Introduction',
        StartTime: '9:00 AM',
        EndTime: '10:00 AM',
        Speaker: 'Bill Miller',
        Location: 'RTP BLD 1.1 - CLEMSON TIGERS',
        color: '#fff8e4',
        date: 'Tuesday, October 15',
        picture: '../assets/images/jkappers.jpg'
      },

      {
        sessionname: 'Keynote',
        StartTime: '10:00 AM',
        EndTime: '11:30 AM',
        Speaker: 'Bill Miller',
        Location: 'RTP BLD 1.1 - CLEMSON TIGERS',
        color: '#def4ff',
        date: 'Tuesday, October 15',
        picture: '../assets/images/millerw.jpg'
      },

      {
        sessionname: 'Sales Productivity Improvements',
        StartTime: '11:30 AM',
        EndTime: '1:00 PM',
        Speaker: 'Bill Miller',
        Location: 'RTP BLD 1.1 - CLEMSON TIGERS',
        color: '#fff8e4',
        date: 'Tuesday, October 15',
        picture: '../assets/images/stumpf.jpg'
      },
      {
        sessionname: 'Lunch',
        StartTime: '11:30 AM',
        EndTime: '1:00 PM',
        Speaker: null,
        Location: 'TBD',
        color: '#def4ff',
        date: 'Tuesday, October 15'
      },
      {
        sessionname: 'Data Analytics and Business intelligence',
        StartTime: '1:00 PM',
        EndTime: '2:00 PM',
        Speaker: 'Bill Miller',
        Location: 'RTP BLD 1.1 - CLEMSON TIGERS',
        color: '#fff8e4',
        date: 'Tuesday, October 15',
        picture: '../assets/images/jkappers.jpg'
      },
      {
        sessionname: 'NGDC',
        StartTime: '11:30 AM',
        EndTime: '2:15 PM',
        Speaker: 'Bill Miller',
        Location: 'RTP BLD 1.1 - CLEMSON TIGERS',
        color: '#def4ff',
        date: 'Tuesday, October 15',
        picture: '../assets/images/mmorris.jpg'
      },
      {
        sessionname: 'NGSS Update',
        StartTime: '11:30 AM',
        EndTime: '3:30 PM',
        Speaker: 'Bill Miller',
        Location: 'TBD',
        color: '#fff8e4',
        date: 'Tuesday, October 15',
        picture: '../assets/images/stumpf.jpg'
      }



    ]
  },
  {
    title: 'Wednesday, October 16',
    data: [
      {
        sessionname: 'Introduction',
        StartTime: '9:00 AM',
        EndTime: '10:00 AM',
        Speaker: 'Bill Miller',
        Location: 'RTP BLD 1.1 - CLEMSON TIGERS',
        color: '#fff8e4',
        date: 'Wednesday, October 16',
        picture: '../assets/images/stumpf.jpg'
      },

      {
        sessionname: 'Keynote',
        StartTime: '10:00 AM',
        EndTime: '11:30 AM',
        Speaker: 'Bill Miller',
        Location: 'RTP BLD 1.1 - CLEMSON TIGERS',
        color: '#def4ff',
        date: 'Wednesday, October 16',
        picture: '../assets/images/stumpf.jpg'
      },

      {
        sessionname: 'Sales Productivity Improvements',
        StartTime: '11:30 AM',
        EndTime: '1:00 PM',
        Speaker: 'Bill Miller',
        Location: 'RTP BLD 1.1 - CLEMSON TIGERS',
        color: '#fff8e4',
        date: 'Wednesday, October 16',
        picture: '../assets/images/stumpf.jpg'
      },
      {
        sessionname: 'Lunch',
        StartTime: '11:30 AM',
        EndTime: '1:00 PM',
        Speaker: null,
        Location: 'TBD',
        color: '#def4ff',
        date: 'Wednesday, October 16'
      },
      {
        sessionname: 'Data Analytics and Business intelligence',
        StartTime: '1:00 PM',
        EndTime: '2:00 PM',
        Speaker: 'Bill Miller',
        Location: 'RTP BLD 1.1 - CLEMSON TIGERS',
        color: '#fff8e4',
        date: 'Wednesday, October 16',
        picture: '../assets/images/stumpf.jpg'
      },
      {
        sessionname: 'NGDC',
        StartTime: '11:30 AM',
        EndTime: '2:15 PM',
        Speaker: 'Bill Miller',
        Location: 'RTP BLD 1.1 - CLEMSON TIGERS',
        color: '#def4ff',
        date: 'Wednesday, October 16',
        picture: '../assets/images/stumpf.jpg'
      },
      {
        sessionname: 'NGSS Update',
        StartTime: '11:30 AM',
        EndTime: '3:30 PM',
        Speaker: 'Bill Miller',
        Location: 'RTP BLD 1.1 - CLEMSON TIGERS',
        color: '#fff8e4',
        date: 'Wednesday, October 16',
        picture: '../assets/images/stumpf.jpg'
      }



    ]
  },
  {
    title: 'Thursday, October 17',
    data: [
      {
        sessionname: 'Introduction',
        StartTime: '9:00 AM',
        EndTime: '10:00 AM',
        Speaker: 'Bill Miller',
        Location: 'TBD',
        color: '#fff8e4',
        date: 'Thursday, October 17',
        picture: '../assets/images/stumpf.jpg'
      },

      {
        sessionname: 'Keynote',
        StartTime: '10:00 AM',
        EndTime: '11:30 AM',
        Speaker: 'Bill Miller',
        Location: 'TBD',
        color: '#def4ff',
        date: 'Thursday, October 17',
        picture: '../assets/images/stumpf.jpg'
      },

      {
        sessionname: 'Sales Productivity Improvements',
        StartTime: '11:30 AM',
        EndTime: '1:00 PM',
        Speaker: 'Bill Miller',
        Location: 'TBD',
        color: '#fff8e4',
        date: 'Thursday, October 17',
        picture: '../assets/images/stumpf.jpg'
      },
      {
        sessionname: 'Lunch',
        StartTime: '11:30 AM',
        EndTime: '1:00 PM',
        Speaker: 'Bill Miller',
        Location: 'TBD',
        color: '#def4ff',
        date: 'Thursday, October 17',
        picture: '../assets/images/stumpf.jpg'
      },
      {
        sessionname: 'Data Analytics and Business intelligence',
        StartTime: '1:00 PM',
        EndTime: '2:00 PM',
        Speaker: 'Bill Miller',
        Location: 'TBD',
        color: '#fff8e4',
        date: 'Thursday, October 17',
        picture: '../assets/images/stumpf.jpg'
      },
      {
        sessionname: 'NGDC',
        StartTime: '11:30 AM',
        EndTime: '2:15 PM',
        Speaker: 'Bill Miller',
        Location: 'TBD',
        color: '#def4ff',
        date: 'Thursday, October 17',
        picture: '../assets/images/stumpf.jpg'
      },
      {
        sessionname: 'NGSS Update',
        StartTime: '11:30 AM',
        EndTime: '3:30 PM',
        Speaker: 'Bill Miller',
        Location: 'TBD',
        color: '#fff8e4',
        date: 'Thursday, October 17',
        picture: '../assets/images/stumpf.jpg'
      }
    ]
  }










]
