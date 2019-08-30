import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class WelcomePage extends Component {


    render() {
        return (
            <View style={styles.viewMainStyle}>
                <Image style={styles.imageArr} source={require('../assets/iconfinder_Snow_Occasional_47313.png')} />
                <Text style={styles.paragraph}>Wounldn't you like to have a personalized weather app to send you weather app to send you weather updates based off time, rain percentage, or humuduty level?</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('UserWeather')}
                >
                    <Text style={styles.buttonTxt}> Yes </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text style={styles.text1}>Login</Text>
                </TouchableOpacity>

            </View>
        );
    }
}// end class

const styles = StyleSheet.create({
    //PARAGRAPH
    paragraph: {
        margin: 24,
        padding: 15,
        fontSize: 20,
        textAlign: 'center',
        color: '#ffffff',
        lineHeight: 33,
    },
    //BUTTON
    button: {
        alignItems: 'center',
        backgroundColor: '#0D7100',
        padding: 10,
        marginTop: 15,
        width: 125,
        borderRadius: 5,
        fontWeight: 'bold'
    },
    //MAIN STYLING
    viewMainStyle: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#01404D',
        flexWrap: 'wrap'
    },
    text1: { //LOGIN TEXT
        paddingTop: 10,
        color: '#CB812B',
        fontSize: 20,
        margin: 30,
        fontWeight: 'bold'
    },
    imageArr: { //IMAGE ATTRIBUTES
        width: 150,
        height: 150,
        margin: 30
    },
    buttonTxt: { //TEXT FOR THE BUTTON
        fontSize: 30,
        color: '#ffffff',
    }
});
