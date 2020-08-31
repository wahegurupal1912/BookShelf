import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';

export default class SignUpScreen extends React.Component {

    constructor(props) {
        super(props);
        this.trySignup = this.trySignup.bind(this);
    }

    async trySignup() {
        Keyboard.dismiss();      
        this.props.navigation.navigate('LoginScreen');
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text
                    style={styles.bodyText}>
                    Sign Up
                </Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.FieldLabel}>Personal Info</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="white"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.FieldLabel}>Account Details</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="white"
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity
                style={styles.signUpButtton} 
                onPress={this.trySignup}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{marginTop: 20}} 
                onPress={() => this.props.navigation.navigate('LoginScreen')}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 20
    },
    bodyText: {
        color: '#fff',
        fontSize: 40,
        marginBottom: 30
    },
    FieldLabel:{
        color: '#fff',
        textAlign: 'left',
        alignSelf: 'stretch',
        marginLeft: '10%'
    },
    signUpButtton: {
        backgroundColor: '#f3bb12',
        padding: 10,
        marginTop: 20,
        width: "80%",
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: "black",
        fontWeight: '700',
        fontSize: 16
    },
    cancelButtonText:{
        color: "white",
        fontWeight: '700',
        fontSize: 16
    },
    input: {
        height: 50,
        borderColor: 'gray',
        width: "80%",
        color: "white",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        backgroundColor: "#1c1c1c"
    }, 
    error: {
        color: '#E96E75',
        padding: 5
    }
});