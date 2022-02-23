import React from 'react'
import styles from './styles'


export default function ProfileBox() {

    return (

        <>
            <styles.profileText>Seu perfil</styles.profileText>
            <styles.profileBox>

                <styles.profileImage>
                    <styles.icon name='user-circle-o' />
                </styles.profileImage>

                <styles.profileDescripition>
                    <styles.profileName>Carolina Magalhães</styles.profileName>
                    <styles.profileState>São Paulo - SP</styles.profileState>
                    <styles.profileBoxRating>
                        <styles.profileRating source={require('../../assets/star.png')} />
                        <styles.profileRating source={require('../../assets/star.png')} />
                        <styles.profileRating source={require('../../assets/star.png')} />
                        <styles.profileRating source={require('../../assets/star.png')} />
                        <styles.profileRating source={require('../../assets/star.png')} />
                        <styles.profiloRatingNumber>(1)</styles.profiloRatingNumber>
                    </styles.profileBoxRating>

                </styles.profileDescripition>

            </styles.profileBox>
        </>
















    )

}