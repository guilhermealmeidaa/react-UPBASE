import styled from "styled-components/native";

export default{

    scrollContainer: styled.ScrollView`
        flex 1;
        width: 100%;
        height: 300px;
        margin-top: 20px;
        
    `,
    menuItem: styled.ImageBackground`
        width: 200px;
        height: 200px;
        border-width: 1px;
        margin-right: 20px;
        border-radius: 20px;
        overflow: hidden;
        border-color: #FFF;
    `,
    menuTextTop: styled.Text`
    color: ${props=>props.color};
    font-size: 16px;
    
    `,
    menuTextBottom: styled.Text`
    color: #FFF;
    font-size: 18px;
    justify-content: flex-end;
    margin-top: 80px;
    margin-left: 18px;
    font-weight: bold;
    `,
    buttonTextLeft: styled.TouchableHighlight`
    height: 30px;
    width: 100px;
    background-color: #DD8A00;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-top: 15px;
    margin-left: 10px;
    
    `,
    buttonTextRight: styled.TouchableHighlight`
    height: 30px;
    width: 130px;
    background-color: #40216D;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-top: 15px;
    margin-left: 10px;
    `
}
    