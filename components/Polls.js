import React from 'react';

import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    Dimensions,
    View,
    SafeAreaView,
    TouchableHighlight,
    Modal,
    TextInput,
    UIManager,
    Animated,
    Keyboard

} from 'react-native';
import { Rating } from 'react-native-ratings';
import { Icon, CheckBox, Button } from 'react-native-elements'

const { State: TextInputState } = TextInput;

export default class Sessions extends React.Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    state = {
        modalVisible: false,
        checkedyes: false,

        shift: new Animated.Value(0),
        //imageurl : '../assets/images' + this.props.session.pictures + '.jpg',
    };





    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    handleKeyboardDidShow = (event) => {
        //alert('Keyboard active');
        const { height: windowHeight } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;
        const currentlyFocusedField = TextInputState.currentlyFocusedField();
        //alert(currentlyFocusedField)
        UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
            const fieldHeight = height;
            const fieldTop = pageY;
            const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
            if (gap >= 0) {

                return;
            }
            Animated.timing(
                this.state.shift,
                {
                    toValue: gap,
                    duration: 300,
                    useNativeDriver: true,
                }
            ).start();
        });
    }

    handleKeyboardDidHide = () => {
        Animated.timing(
            this.state.shift,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }
        ).start();
    }


    render() {
        const { shift } = this.state;

        return (
            <SafeAreaView style={styles.maincontainer}>
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <View style={[styles.mainview, { backgroundColor: this.props.poll.color }]}>
                        
                            <Image
                                source={require('../assets/images/lunch.png')}
                                style={{ width: 40, height: 40, marginLeft: 20,alignSelf:'center' }}
                            />
                            <Text style={styles.pollname}>{this.props.poll.pollname}</Text>
                        

                    </View>
                </TouchableHighlight>
                <Modal

                    animationType="fade"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>

                    <SafeAreaView style={[styles.maincontainer]}>


                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                                console.log('Testing');
                            }}>
                            <Icon name='clear' iconStyle={{ marginTop: 20, alignSelf: 'flex-start'}} />


                        </TouchableHighlight>
                        <ScrollView style={styles.pollmodalview}>

                            <View>
                                <Text style={styles.modalquestion}>{this.props.poll.question[0].name}</Text>

                                <Rating

                                    ratingCount={5}
                                    imageSize={30}
                                    style={styles.rating}
                                    ratingColor='Green'

                                    onFinishRating={this.ratingCompleted}
                                />

                                <Text style={styles.modalquestion}>{this.props.poll.question[1].name}</Text>

                                <Rating

                                    ratingCount={5}
                                    imageSize={30}
                                    style={styles.rating}
                                    ratingColor='Green'

                                    onFinishRating={this.ratingCompleted}
                                />

                                <Text style={styles.modalquestion}>{this.props.poll.question[2].name}</Text>

                                <Rating

                                    ratingCount={5}
                                    imageSize={30}
                                    style={styles.rating}
                                    ratingColor='Green'

                                    onFinishRating={this.ratingCompleted}
                                />

                                <Text style={styles.modalquestion}>{this.props.poll.question[2].name}</Text>

                                <View style={styles.checkbox}>
                                    <CheckBox
                                        title='Yes'
                                        checked={this.state.checkedyes}
                                        onPress={() => this.setState({ checkedyes: true })}
                                        textStyle={{ fontFamily: 'GothamSSm', fontSize: 15 }}

                                    />

                                    <CheckBox

                                        title='No'
                                        checked={!this.state.checkedyes}
                                        onPress={() => this.setState({ checkedyes: false })}
                                        textStyle={{ fontFamily: 'GothamSSm', fontSize: 15 }}
                                    />
                                </View>

                                <Text style={styles.modalquestion}>{this.props.poll.question[3].name}</Text>

                                <TextInput
                                    style={{ height: 80, borderColor: 'black', borderWidth: .5,marginTop:5 }}
                                    multiline={true}
                                    numberOfLines={4}
                                    onChangeText={(text) => this.setState({ text })}

                                />

                                <Button title="Submit" style={styles.button}></Button>





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
        height: 150,
        //color: '#b0d8f7',
        marginTop: 20,
        marginRight: 20,
        marginBottom: 10,
        flexDirection:'row'

    },
    pollname: {
        fontSize: 20,
        alignSelf: 'center',
        width: '70%',
        marginLeft: 20

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
    modalquestion: {
        marginTop: 30
    },
    modalsessionname: {

        fontSize: 30,
        marginTop: 20
    },

    pollmodalview: {
        marginTop: 30,
    },
    maincontainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20
    },

    rating: {
        marginTop: 5,
        alignSelf: 'flex-start'
    },
    checkbox: {
        flex: 1,
        flexDirection: 'row'

    },
    button:{
        width: 100,
        color: '#2d6dde',
        borderRadius: 200,
        flex:1,
        alignSelf:'center',
        marginTop: 20
    
      }


});
