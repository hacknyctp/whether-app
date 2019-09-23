import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage"


export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "sparky@gmail.com",
            password: "1234567",
            token: "",
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    //sends data to the backend for verification
    sendData = async () => {
        const body = {
            "email": this.state.email,
            "password": this.state.password
        }

        fetch('https://whether-api.herokuapp.com/api/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        }).then(result => result.json())
            .then(result => {
                if (result.status === 400 || result.status === 500) console.log(result);
                else {
                    this.successLogin(result.token);
                }
            })
            .catch(error => console.log(`There was an error ${error}`))
    }

    //when the user login is successful, it saves the token and move to dashboard
    successLogin = async (token) => {
        console.log(token)
        await AsyncStorage.setItem('jwt', token);
        this.props.navigation.navigate("Dashboard");
    }

    onChangeHandler = (event, name) => {
        this.setState({ [name]: event.nativeEvent.text });
        console.log(`${name} input field is ${event.nativeEvent.text}`);
    }


    render() {
        return (
            <View style={styles.viewMainStyle}>

                <Text style={styles.text1}>Weather App</Text>

                <Image style={styles.imageArr} source={require('../assets/iconfinder_Snow_Occasional_47313.png')} />

                <Text style={styles.text2}>Login</Text>

                {/* onchange is passing a event object and the current inputfield to change the corresponding state  */}
                <TextInput value={this.state.email} onChange={(e) => { this.onChangeHandler(e, "email") }} placeholder={'Email'} style={styles.input} />

                <TextInput value={this.state.password} onChange={(e) => { this.onChangeHandler(e, "password") }} placeholder={'Password'} style={styles.input} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.sendData}
                >
                    <Text style={styles.buttonTxt}> Enter </Text>
                </TouchableOpacity>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    //INPUT STYLING
    input: {
        width: 250,
        height: 44,
        padding: 10,
        color: '#CB812B',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        backgroundColor: '#ffffff',
        marginBottom: 10,
        margin: 10
    },
    text1: {
        //weather app text
        fontSize: 35,
        //margin: 30
        paddingTop: 30,
        color: '#CB812B',
        textAlignVertical: 'top'
    },
    text2: {
        //sign up orange text
        fontSize: 25,
        paddingTop: 20,
        paddingBottom: 20,
        color: '#CB812B',
        alignItems: "center"
    },
    button: {
        //buttton -->cant change text color, or maniupulate size 
        alignItems: 'center',
        backgroundColor: '#0D7100',
        color: '#ffffff',
        padding: 10,
        marginTop: 15,
        width: 125,
        fontSize: 50,
        borderRadius: 5

    },
    viewMainStyle: { //  styling for all the components
        alignContent: "center",
        alignItems: "center",
        backgroundColor: '#01404D',
        fontWeight: 'bold',
        height: "100%",
    },
    imageArr: { //image attributes
        width: 150,
        height: 150,
        margin: 25
    },
    buttonTxt: { //text for the button
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',

    }
});