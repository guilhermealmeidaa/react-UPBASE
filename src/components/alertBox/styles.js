import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export default{

    box:styled.View`
    flex-direction: row;
    height: 70px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    border-width: 1px;
    border-color: #816363;
    background-color: rgb(247, 247, 190);
    margin-top: 20px;
    border-radius: 15px;
    align-items: center;
    justify-content: space-around;
    `,
    boxChildren:styled.View`
    width: 90%;
    height: 90%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    `,
    boxText:styled.View`
    width: 80%;
    
    `,
    icon:styled(Feather)`
    font-size: 30px;
    color: #8D7171;
    

    `,
    text:styled.Text`
    color: #8D7171;
    font-size: 15px;
    `,
    boxImage: styled.View`
    width: 10%
    justify-content: center;
    align-items: center;
    `,
    textBold: styled.Text`
    font-weight: bold;
    `
}