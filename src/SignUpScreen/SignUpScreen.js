import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SignUpScreen(){
    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text
                style={styles.bodyText}>
                Sign Up
            </Text>

            <View style={styles.inputContainer}>
                <Text style={styles.fieldLabel}>Personal Info</Text>
                <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="black"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.fieldLabel}>Account Details</Text>
                <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="black"
                />
                <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="black"
                secureTextEntry={true}
                />
            </View>

            <TouchableOpacity
            style={styles.signUpButtton} 
            onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={{marginTop: 20}} 
            onPress={() => navigation.goBack()}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        color: '#000',
        fontSize: 40,
        marginBottom: 30
    },
    fieldLabel:{
        color: '#000',
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
        color: "#000",
        fontWeight: '700',
        fontSize: 16
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
    error: {
        color: '#E96E75',
        padding: 5
    }
});