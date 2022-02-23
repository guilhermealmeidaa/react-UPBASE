import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons'; 

export default{
    profileBox: styled.View`
    align-items: center;
    width: 100%;
    height: 120px;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 20px;
    
    `,
    profileImage: styled.View`
    justify-content: center;
    width: 30%;
    height: 150px;
    align-items: center;
    `,
    profileDescripition: styled.View`
    width: 70%;
    height: 150px;
    justify-content: center;
    
    `,
    icon: styled(FontAwesome)`
    font-size: 75px;
    color: grey;
    `,
    profileText: styled.Text`
    font-size: 22px; 
    margin-left: 15px;
    margin-top: 30px;
    margin-bottom: 10px;
    `,
    profileName: styled.Text`
    font-size: 18px;
    font-weight: bold; 
    letter-spacing: 1px;
    margin-bottom: 5px;
    `,
    profileState: styled.Text`
    font-size: 14px; 
    margin-top: 5px; 
    color: #989E9E;
    margin-bottom: 5px;
    `,
    profileRating: styled.Image`
    width: 25px;
    height: 25px;
    margin-right: 2px;
    `,
    profileBoxRating: styled.View`
    flex-direction: row;
    align-items: center
    `,
    profiloRatingNumber: styled.Text`
    color: #DDD;
    font-size: 16px;
    
    `

}