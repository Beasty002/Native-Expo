import { Slot, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const RootLayout = () => {
  return (
    <>
      {/* <Slot /> */}
      {/*slot le  page content lerauxa meaning the content of index.jsx */}
      {/* <Stack /> */}
      {/* stack direct ni use garna milyo or with opening and closing  */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ddd",
          },
          headerTintColor: "#333",
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        {/* name ma hamle file ko naam halxam ani title tyo nav ma dekhaune ko naam index baata home ma change garxa */}
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen
          name="contact"
          options={{ title: "Contact", headerShown: false }}
        />
      </Stack>
      {/*Slack le  page content lerauxa slot le jastai tara with a vanigation menu top ma*/}
      {/* stack vanny ko reason chai you stack jasari kaam garxa
      _._.index (index ma thiyem)
      _.about.index (about ma gayem)
      contact.about.index (contact ma gayem)
      aba back le paila contact baata about ma janxam tespaxi about baata index

      
      */}
      {/* <Text>Footer</Text> */}
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
