import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';


export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.tryLogin = this.tryLogin.bind(this);
    }

    async tryLogin() {
        Keyboard.dismiss()
        this.props.navigation.navigate('Main');
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.formContainer}>
                    <Image
                    style={styles.logo}
                    resizeMode='center'
                    source={require('../../assets/icon.png')}
                    />

                    <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="black"
                    />

                    <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    />

                    <TouchableOpacity
                    onPress={this.tryLogin}
                    style={[styles.button, {backgroundColor: '#30404F'}]}>
                        <Text style={{color: "white", fontWeight: '700', fontSize: 16}}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.noAccount}>
                        <Text style={styles.signUpText}>Do not have an existing account?</Text>

                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SignUpScreen')}
                        style={[styles.button, {backgroundColor: '#f3bb12'}]}>
                            <Text style={{color: "black", fontWeight: '700', fontSize: 16}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    formContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    noAccount: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    logo: {
        width: 150,
        height: 150,
    },
    input: {
        height: 60,
        borderColor: '#242424',
        borderWidth: 1,
        width: "80%",
        color: "black",
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        backgroundColor: "#e6e6e6"
    },
    button: {
        padding: 10,
        marginTop: 20,
        width: "80%",
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signUpText: {
        marginTop: 20,
        color: "#242424"
    },
    error: {
        color: '#E96E75',
        padding: 5
    }
});