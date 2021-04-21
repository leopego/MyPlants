import React from "react";
import { Text, TextInput, StyleSheet, SafeAreaView } from "react-native";

const UserIdentification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>😀</Text>
      <Text>Como podemos chamar você</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserIdentification;
