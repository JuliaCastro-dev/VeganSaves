import { Dimensions } from "react-native";
import styled from "styled-components/native";
const { height, width } = Dimensions.get("screen");

const Container = styled.View`
  width: ${width * 0.8};
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  height: ${height * 0.1};
  justify-content: space-between;
  border-radius: 10%;
  padding: 5%;
`;
const Content = styled.View`
  width: 85%;
  display: flex;
  position: relative;
  flex-direction: row;

  align-self: center;
  align-items: center;
  justify-content: flex-start;
`;

const TextQuantity = styled.Text`
  color: aliceblue;
  font-weight: 900;
  font-size: ${height * 0.03};
`;

const TextDescription = styled.Text`
  color: aliceblue;
  font-weight: 600;
  margin-left: 3%;
  font-size: ${height * 0.03};
`;

export { Container, Content, TextQuantity, TextDescription };
