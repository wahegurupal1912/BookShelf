import React from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';

export default class HomeScreen extends React.Component {
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content"/>
                <Text>Home</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
});