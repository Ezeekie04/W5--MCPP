import { ScrollView } from "react-native";
import userData from "../data.json"; // Import data dari JSON
import styles from "../Styles.js";
import React from "react";
import { Avatar, Card, Divider } from "react-native-paper";

const UserList = ({ navigation }) => {
  return (
    <ScrollView>
      {userData.map((user) => (
        <React.Fragment key={user.name}>
          <Card 
            style={styles.card} 
            onPress={() => navigation.navigate("Profile", { user })}
          >
            <Card.Title
              title={user.name}
              subtitle={user.email}
              left={() => (
                <Avatar.Image size={50} source={{ uri: user.photo_url }} />
              )}
            />
          </Card>
          <Divider style={styles.divider} />
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

export default UserList;
