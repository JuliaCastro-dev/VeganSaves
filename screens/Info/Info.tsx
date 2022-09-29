import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import Card from "../../components/Card";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";
import * as Style from "./styles";

export default function Info() {
  return (
    <Style.Container>
      <Style.Title>Todos os dias um vegano salva:</Style.Title>
      <Card
        type="life"
        icon={<AntDesignIcon name="heart" size={30} color="white" />}
        description="Vida Animal"
        quantity="1"
      />

      <Card
        type="water"
        icon={<AntDesignIcon name="heart" size={30} color="white" />}
        description="Litros de água"
        quantity="4.164"
      />
      <Card
        type="food"
        icon={<AntDesignIcon name="heart" size={30} color="white" />}
        description="Kg de grão"
        quantity="18"
      />
      <Card
        type="forest"
        icon={<AntDesignIcon name="heart" size={30} color="white" />}
        description="m² de terreno florestado"
        quantity="3"
      />
      <Card
        type="water"
        icon={<AntDesignIcon name="heart" size={30} color="white" />}
        description="Kg de CO2"
        quantity="9"
      />
    </Style.Container>
  );
}
