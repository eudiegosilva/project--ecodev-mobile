import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon, FontAwesome } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";

const Detail: React.FC = () => {
  const navigation = useNavigation();
  function handleNavigateBack() {
    navigation.goBack();
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>
        <Image
          style={styles.pointImage}
          source={{
            uri:
              "https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
          }}
        />
        <Text style={styles.pointName}>Mercadinho</Text>
        <Text style={styles.pointItems}>Objetos, objetos e objetos</Text>
        <View style={styles.address}>
          <Text style={styles.addressTitle}>Lorem</Text>
          <Text style={styles.addressContent}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, eum.
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => {}}>
          <FontAwesome name="whatsapp" size={20} color="#FFF" />
          <Text style={styles.buttonText}>whatsapp</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={() => {}}>
          <Icon name="mail" size={20} color="#FFF" />
          <Text style={styles.buttonText}>email</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 42,
  },

  pointImage: {
    borderRadius: 10,
    height: 120,
    marginTop: 32,
    resizeMode: "cover",
    width: "100%",
  },

  pointName: {
    color: "#322153",
    fontFamily: "Ubuntu_700Bold",
    fontSize: 28,
    marginTop: 24,
  },

  pointItems: {
    color: "#6C6C80",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
  },

  address: {
    marginTop: 32,
  },

  addressTitle: {
    color: "#322153",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },

  addressContent: {
    color: "#6C6C80",
    fontFamily: "Roboto_400Regular",
    lineHeight: 24,
    marginTop: 8,
  },

  footer: {
    borderColor: "#999",
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 20,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#34CB79",
    borderRadius: 10,
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    width: "48%",
  },

  buttonText: {
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    marginLeft: 8,
  },
});

export default Detail;
