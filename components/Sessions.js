import React from 'react';

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    TouchableHighlight,
    Modal
} from 'react-native';
import { Rating } from 'react-native-ratings';
import { Icon } from 'react-native-elements'



export default class Sessions extends React.Component {

    constructor(props) {
        super(props);

    }

    state = {
        modalVisible: false,
        //imageurl : '../assets /i mages' + this.props.session.picture + '.jpg',
    };



    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    render() {

        return (
            <SafeAreaView style={styles.maincontainer}>
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <View style={[styles.mainview, { backgroundColor: this.props.session.color }]}>
                        <View style={styles.sessionheader}>
                            <Image
                                source={require('../assets/images/lunch.png')}
                                style={{ width: 40, height: 40, marginLeft: 20, marginTop: 10 }}
                            />
                            <Text style={styles.sessionname}>{this.props.session.sessionname}</Text>
                        </View>
                        <View>
                            <Text style={styles.sessiontime}>{this.props.session.StartTime} - {this.props.session.EndTime}</Text>

                        </View>
                    </View>
                </TouchableHighlight>
                <Modal

                    animationType="fade"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <SafeAreaView style={styles.modalview}>
                        <ScrollView showsVerticalScrollIndicator='false'>

                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Icon name='clear' iconStyle={{ marginTop: 20, alignSelf: 'flex-start' }} />


                        </TouchableHighlight>
                        <Text style={styles.modalsessionname}>{this.props.session.sessionname}</Text>


                        <Text style={styles.modaldate}>{this.props.session.date}</Text>
                        <Text style={styles.modaldate}>Time</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={styles.modaltime}>{this.props.session.StartTime} - {this.props.session.EndTime}</Text>
                            <Icon

                                name='bell-outline'
                                type='material-community'
                                color='#2d6dde'
                                size='25'
                                onPress={() => console.log('helo')} />
                        </View>
                        <Text style={styles.modaldate}>Speaker</Text>
                        <View style={styles.modalspeakerrow}>
                            <Image
                                source={require('../assets/images/millerw.jpg')}
                                style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                            />
                            <Text style={styles.speakername}>{this.props.session.Speaker}</Text>



                        </View>

                        <Text style={styles.modaldate}>Location</Text>
                        <Text style={styles.modallocation}>{this.props.session.Location}</Text>

                        <Image
                            source={require('../assets/images/RTP.png')}
                            style={{ width: 290, height: 220, alignSelf: 'center', marginTop: 15 }}
                        />
                        <View>
                            <Text style={styles.modaldate}>Rating</Text>

                            <Rating

                                ratingCount={5}
                                imageSize={30}
                                style={styles.rating}
                                ratingColor='Green'

                                onFinishRating={this.ratingCompleted}
                            />



                        </View>
                        </ScrollView>
                    </SafeAreaView>
                </Modal>
            </SafeAreaView>
        );
    }
}



const styles = StyleSheet.create({

    mainview: {
        flex: 1,
        width: '100%',
        height: 80,
        //color: '#b0d8f7',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10

    },
    sessionname: {
        fontSize: 15,
        alignSelf: 'center',
        width: '70%',
        marginLeft: 20

    },
    sessionheader: {
        flexDirection: 'row',
    },
    sessiontime: {
        marginLeft: 20,
        opacity: .5,
        marginTop: 5
    },
    modalview: {
        flex: 1,
        width: '90%',
        marginLeft: 20

    },
    modalsessionname: {

        fontSize: 30,
        marginTop: 20
    },
    modaldate: {
        fontSize: 15,
        marginTop: 30,
        opacity: .5

    },
    modaltime: {
        fontSize: 15,
        marginTop: 5,
        marginRight:5


    },
    modalspeakerrow: {
        marginTop: 5,
        flexDirection: 'row',
        //justifyContent : 'space-around'
    },
    maincontainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginRight: 20
    },
    speakername: {
        fontSize: 17,
        alignSelf: 'center',
        marginLeft: 15
    },
    modallocation: {

        fontSize: 15,
        marginTop: 5
    },
    rating: {
        marginTop: 5,
        alignSelf: 'flex-start'
    }


});
