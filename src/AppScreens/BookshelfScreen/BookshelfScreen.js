import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default class BookshelfScreen extends React.Component {
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Text>My Bookshelf</Text>
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