import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About page</Text>
      <Link href="/" style={styles.link}>
        Back again
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact
      </Link>
    </View>
  );
};

export default About;

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
