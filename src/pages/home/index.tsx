import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { View, ImageBackground, Image, StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate("Points");
  }
  return (
    <ImageBackground
      source={require("../../assets/home-background.png")}
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}
    >
      <View style={styles.main}>
        <Image source={require("../../assets/logo.png")} />
        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>
          Ajudamos pessoas a encontrar pontos de coleta de forma eficiente
        </Text>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleNavigateToPoints}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#FFF" size={16} />
            </Text>
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#322153",
    fontFamily: "Ubuntu_700Bold",
    fontSize: 32,
    marginTop: 64,
    maxWidth: 260,
  },

  description: {
    color: "#6C6C80",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
    maxWidth: 260,
  },

  footer: {},

  select: {},

  input: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    fontSize: 16,
    height: 60,
    marginBottom: 8,
    paddingHorizontal: 24,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#34CB79",
    borderRadius: 10,
    flexDirection: "row",
    height: 60,
    marginTop: 8,
    overflow: "hidden",
  },

  buttonIcon: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    height: 60,
    justifyContent: "center",
    width: 60,
  },

  buttonText: {
    color: "#FFF",
    flex: 1,
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    justifyContent: "center",
    textAlign: "center",
  },
});

export default Home;
