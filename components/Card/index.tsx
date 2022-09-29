import { JSXElement } from "@babel/types";
import { ComponentElement } from "react";
import { View } from "react-native";
import { Text } from "../Themed";
import * as Style from "./styles";

export type Props = {
  description: string;
  quantity: string;
  icon: any;
  type: string;
};

export default function Card({ description, icon, quantity, type }: Props) {
  let background = "white";
  switch (type) {
    case "life":
      background = "#FF2A5D";
      break;

    case "water":
      background = "#0076F0";
      break;

    case "food":
      background = "#F9A000";
      break;

    case "forest":
      background = "#33D728";
      break;

    default:
      background = "#FF2A5D";
      break;
  }

  return (
    <Style.Container style={{ backgroundColor: background }}>
      {icon}
      <Style.Content>
        <Style.TextQuantity>{quantity}</Style.TextQuantity>
        <Style.TextDescription>{description}</Style.TextDescription>
      </Style.Content>
    </Style.Container>
  );
}
