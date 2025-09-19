import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "./../assets/img/light_logo.png";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={[styles.title, { color: "purple" }]}>Home</Text>
      <Text style={{ marginTop: 10, fontSize: 20 }}>Home</Text>

      <View style={styles.card}>
        <Text>Hello This is a card</Text>
      </View>
      <Link href="/about" style={styles.link}>
        About Page
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    width: 180,
    height: 150,
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#f0f0f0ff",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
  link: {
    borderBottomWidth: 2,
    borderBottomColor: "#f0f0f0ff",
    marginVertical: 10,
  },
});
