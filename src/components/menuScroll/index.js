import React from 'react';
import styles from './styles';

export default function MenuScroll() {
    return (
        <styles.scrollContainer
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 20
            }}
        >

            <styles.menuItem
                source={require('../../assets/frutas.png')}
                resizeMode="cover"
            >
                <styles.buttonTextLeft onPress= {()=>{}} >
                    <styles.menuTextTop color="#FFF">Parceiros</styles.menuTextTop>
                </styles.buttonTextLeft>

                <styles.menuTextBottom>Diabetes: Alimentos para evitar.</styles.menuTextBottom>
            </styles.menuItem>

            <styles.menuItem
                source={require('../../assets/medico.png')}
                resizeMode="cover"
            >
                <styles.buttonTextRight onPress= {()=>{}} >
                    <styles.menuTextTop color="#FFF" >Capacitações</styles.menuTextTop>
                </styles.buttonTextRight>

                <styles.menuTextBottom>Como ministrar doses</styles.menuTextBottom>
            </styles.menuItem>

        </styles.scrollContainer>
    )
}