import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, ScrollView, View, TouchableOpacity } from 'react-native';
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
                        <View>
                            <TouchableOpacity style={styles.statsBox}>
                                <Text style={[styles.text, {fontSize: 20}]}>34</Text>
                                <Text style={[styles.text, styles.subText]}>Books</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderColor: "#AEB5BC", borderLeftWidth: 1}}>
                            <TouchableOpacity style={styles.statsBox}>
                                <Text style={[styles.text, {fontSize: 20}]}>359</Text>
                                <Text style={[styles.text, styles.subText]}>Followers</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderColor: "#AEB5BC", borderLeftWidth: 1}}>
                            <TouchableOpacity style={styles.statsBox}>
                                <Text style={[styles.text, {fontSize: 20}]}>278</Text>
                                <Text style={[styles.text, styles.subText]}>Following</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.feedsContainer}>
                        <View style={styles.feedsBox}>
                            <Text style={styles.feedText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</Text>
                            <View style={styles.feedStatsContainer}>
                                <View style={styles.feedStats}>
                                    <MaterialCommunityIcons name="heart-outline" color={"#242424"} size={26} />
                                    <Text style={styles.feedStatsText}>1.8k</Text>
                                </View>
                                <View style={{marginLeft: 15, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                                    <MaterialCommunityIcons name="message-reply" color={"#242424"} size={26} />
                                    <Text style={styles.feedStatsText}>356</Text>
                                </View>
                            </View>
                        </View >

                        <View style={styles.feedsBox}>
                            <Text style={styles.feedText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</Text>
                            <View style={styles.feedStatsContainer}>
                                <View style={styles.feedStats}>
                                    <MaterialCommunityIcons name="heart-outline" color={"#242424"} size={26} />
                                    <Text style={styles.feedStatsText}>5.4k</Text>
                                </View>
                                <View style={{marginLeft: 15, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                                    <MaterialCommunityIcons name="message-reply" color={"#242424"} size={26} />
                                    <Text style={styles.feedStatsText}>987</Text>
                                </View>
                            </View>
                        </View >

                        <View style={styles.feedsBox}>
                            <Text style={styles.feedText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</Text>
                            <View style={styles.feedStatsContainer}>
                                <View style={styles.feedStats}>
                                    <MaterialCommunityIcons name="heart-outline" color={"#242424"} size={26} />
                                    <Text style={styles.feedStatsText}>980</Text>
                                </View>
                                <View style={{marginLeft: 15, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                                    <MaterialCommunityIcons name="message-reply" color={"#242424"} size={26} />
                                    <Text style={styles.feedStatsText}>65</Text>
                                </View>
                            </View>
                        </View >
                    </View>
                </ScrollView> 
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
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
    },
    feedsContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 30
    },
    feedsBox: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5,
        width: "90%",
        marginBottom: 10,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    feedStatsContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row"
    },
    feedText: {
        fontFamily: "HelveticaNeue",
        color: "#52575D",
        fontSize: 16,
    },
    feedStats: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    feedStatsText: {
        marginLeft: 5,
        fontSize: 16,
        fontFamily: "HelveticaNeue",
        color: "#52575D"
    }
});