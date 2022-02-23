import styled from 'styled-components/native'
import { FontAwesome } from '@expo/vector-icons';

export default {

    container: styled.ScrollView`
        flex:1;
    `,
    header: styled.View`
        background-color: #006557;
        padding-top: 60px;
        padding-bottom: 40px;
    `,
    Line: styled.View`
        width: 100%;
        height: 1px;
        background-color: #C4C9C9;
    `,
    complete: styled.View`
        width: 100%;
        height: 40px;
        flex-direction: row;
        margin-bottom: 30px;
        margin-top: 10px;
        align-items: center;
        justify-content: center;
    `,
    completeText: styled.Text`
        color: #07689F;
        font-weight: bold; 
        font-size: 19px;
        margin-right: 10px; 
    `,
    icon: styled(FontAwesome)`
        font-size: 20px;
        color: #07689F;
    `,
    completeButton: styled.TouchableHighlight`
        width: 180px;
        height: 25px;
        justify-content: center;
        align-items: center;
    `,
    capatacitation: styled.View`
        width: 100%;
        margin: auto;
        margin-bottom: 5px;
        height: 25px;
        flex-direction: row;
        justify-content: space-between;
    `,
    capatacitationTitle: styled.Text`
        font-size: 20px;
        padding-left: 20px;
    `,
    capacitationButton: styled.TouchableHighlight`
        width: 160px;
        height: 25px;
        flex-direction: row;
        justify-content: center;
    `,
    capacitationMore: styled.Text`
        color: #07689F; 
        font-weight: bold;
        font-size: 19px;
    `
}