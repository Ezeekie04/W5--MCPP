import { Button, Text, View, Image } from "react-native";
import styles from "../Styles.js";

const imageMapping = {
  jokowi: require("../assets/foto4.jpg"),
  ardi: require("../assets/foto2.jpg"),
  lumbaLumbaSunda: require("../assets/foto3.jpg"),
  rogerSumatera: require("../assets/foto4.jpg"),
  ilhamPerkakas: require("../assets/foto1.jpg"),
  rudiBanSerep: require("../assets/foto5.jpg"),
  mangKodir: require("../assets/foto3.jpg"),
};

const Profile = ({ route, navigation }) => {
  const { user } = route.params; // Menerima data user dari navigasi

  // Pilih gambar dari mapping atau gunakan default
  const userImage = imageMapping[user.name] || require("../assets/foto1.jpg");

  return (
    <View style={styles.profileContainer}>
      <Image 
        source={userImage} 
        style={styles.profileImage} 
      />
      <Text style={styles.profileName}>{user.name}'s Profile</Text>
      <Text style={styles.profileEmail}>{user.email}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Profile;
