import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Platform, StatusBar, SafeAreaView, ImageBackgrounda, ImageBackground, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class StarMapScreen extends Component {
    constructor() {
        super()
        this.state = {
            longitude: '',
            latitude: ''
        }
    }
    render() {
        const { longitude, latitude } = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
        return (
            <View style={{ flex: 1, backgroundColor: "#1a0023" }}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={{ flex: 0.3, marginTop: 20, alignItems: 'center' }}>
                    <Text style={styles.titleText}>Star Map</Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter your latitude"
                        placeholderTextColor="white"
                        onChangeText={(text) => {
                            this.setState({
                                latitude: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter your longitude"
                        placeholderTextColor="white"
                        onChangeText={(text) => {
                            this.setState({
                                longitude: text
                            })
                        }}
                    />
                </View>
                <WebView
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    style={{ marginTop: 20, marginBottom: 20, }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>
                       Your Latitude: {this.state.latitude}
                    </Text>
                    <Text style={styles.infoText}>
                        Your Longitude: {this.state.longitude}
                    </Text>
                </View>
                <View style={{justifyContent: "center"}}>
                            <TouchableOpacity style={styles.routeCard} onPress={() =>
                                this.props.navigation.navigate("Home")
                            }>
                            <Ionicons style={{position: "absolute"}}
                                name={"home-outline"}
                                color={"black"}
                                size={50}
                            />
                            </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 0,
        resizeMode: 'cover',
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: 'white',
        width: 200
    },
      infoContainer: {
        flex: 0,
        backgroundColor: 'white',
        marginTop: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30,
      },
      infoText: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
      },
      routeCard: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 270,
        borderRadius: 100,
        backgroundColor: "#00ff00",
        marginTop: -90,
        width: "20%" ,
        height: 0
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#FFFF00',
        justifyContent: "center",
        alignItems: "center"
    },
})
