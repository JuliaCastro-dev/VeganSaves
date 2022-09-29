import { Dimensions } from "react-native";
import styled from "styled-components/native";
const { height, width } = Dimensions.get("screen");

const Container = styled.View`
  width: ${width * 0.8};
  display: flex;
  align-self: center;
  align-items: center;
  height: ${height * 0.9};
  justify-content: space-between;
  padding: 5%;
`;

const Title = styled.Text`
  color: antiquewhite;
  font-weight: 900;
  width: 100%;
  text-align: center;
  font-size: ${height * 0.04};
`;

export { Container, Title };
