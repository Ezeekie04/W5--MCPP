import styles from "../Styles.js";
import { Text, Button, View } from "react-native";
import React from "react";

const Homescreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Navigation List</Text>
            <Button title="Email" onPress={() => navigation.navigate("Email")}/>
        </View>
    );
};

export default Homescreen;

