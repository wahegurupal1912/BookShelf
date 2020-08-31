import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, ScrollView, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomeScreen extends React.Component {
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ alignSelf: "center", marginTop: 50 }}>
                        <View style={styles.profileImage}>
                            <Image source={require("../../../assets/Profile/profilepic.jpg")} style={styles.image}></Image>
                        </View>
                        <View style={styles.edit}>
                            <MaterialCommunityIcons name="pencil" color={"#e6e6e6"} size={22} />
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={[styles.text, {fontSize: 30, fontWeight: "200"}]}>Julie</Text>
                        <Text style={[styles.text, {fontSize: 30, fontWeight: "500"}]}>Adams</Text>
                    </View>
                    <View style={styles.statsContainer}>
                        <View style={styles.statsBox}>
                            <Text style={[styles.text, {fontSize: 20}]}>359</Text>
                            <Text style={[styles.text, styles.subText]}>Friends</Text>
                        </View>
                        <View style={[styles.statsBox, {borderColor: "#AEB5BC", borderLeftWidth: 1}]}>
                            <Text style={[styles.text, {fontSize: 20}]}>34</Text>
                            <Text style={[styles.text, styles.subText]}>Books</Text>
                        </View>
                    </View>
                </ScrollView> 
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 1,
        overflow: "hidden"
    },
    edit: {
        backgroundColor: "#242424",
        position: "absolute",
        bottom: 5,
        right: 5,
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        marginTop: 20,
        alignSelf: "center"
    },
    statsBox: {
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20
    }
});