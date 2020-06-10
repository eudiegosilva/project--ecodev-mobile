import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
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
import api from "../../services/api";

interface RouteParams {
  point_id: number;
}

interface Data {
  point: {
    image: string;
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
  items: {
    title: string;
  }[];
}

const Detail: React.FC = () => {
  const [data, setData] = useState<Data>({} as Data);
  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as RouteParams;

  useEffect(() => {
    api
      .get(`/points/${routeParams.point_id}`)
      .then((response) => setData(response.data));
  }, []);

  function handleNavigateBack() {
    navigation.goBack();
  }

  if (!data.point) return null;

  const { point, items } = data;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>
        <Image
          style={styles.pointImage}
          source={{
            uri: point.image,
          }}
        />
        <Text style={styles.pointName}>{point.name}</Text>
        <Text style={styles.pointItems}>
          {items.map((item) => item.title).join(" | ")}
        </Text>
        <View style={styles.address}>
          <Text
            style={styles.addressTitle}
          >{`${point.city}, ${point.uf}`}</Text>
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
