import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.welcomeContainer}>
      <View style={styles.welcomeWrapper}>
        <Text style={styles.welcomeTitle}>
          Gerencie {"\n"} suas plantas de {"\n"} forma facil.
        </Text>
        <Image style={styles.welcomeImage} source={wateringImg} />
        <Text style={styles.welcomeSubtitle}>
          Não esqueça mais de regar suas {"\n"} plantas. Nós cuidamos de lembrar
          você {"\n"}
          sempre que precisar.
        </Text>
        <TouchableOpacity activeOpacity={0.4} style={styles.welcomeButton}>
          <Feather name="chevron-right" style={styles.welcomeButtonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
  },
  welcomeWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
    lineHeight: 34,
  },
  welcomeImage: {
    height: Dimensions.get("window").width * 0.7,
    resizeMode: "contain",
  },
  welcomeSubtitle: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: fonts.text,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  welcomeButton: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: 56,
    width: 56,
  },
  welcomeButtonIcon: {
    fontSize: 30,
    color: "#FFF",
  },
});

export default WelcomeScreen;
