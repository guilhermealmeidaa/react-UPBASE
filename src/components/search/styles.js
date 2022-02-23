import styled from "styled-components/native";
import { Feather, Entypo } from "@expo/vector-icons";

export default{
    container: styled.View`
      justify-content: center;
      align-items: center;
      flex-direction: row;
      background-color: #FFF;
      width: 90%;
      height: 50px;
      border-radius: 10px;
      margin: auto;
    `
    ,
    searchBar__unclicked: styled.View`
      padding: 10px;
      flex-direction: row;
      width: 95%;
      background-color: #FFF;
      border-radius: 15px;
      align-items: center;
    `,
    searchBar__clicked: styled.View`
      padding: 10px;
      flex-direction: row;
      width: 80%;
      background-color: #FFF;
      border-radius: 15px;
      align-items: center;
      justify-content: space-evenly;
    `,
    input: styled.TextInput`
      font-size: 14px;
      color: black;
      margin-left: 10px;
      width: 90%;
    `,
    icon: styled(Feather)`
      font-size: 20px;
      color: black;
      margin-left: 3px;
    `,
  };