import React from 'react'
import styles from './styles'


export default function AlertBox() {

    return (
        <styles.box>

           <styles.boxImage>
                <styles.icon name= 'alert-triangle'/>
            </styles.boxImage>

            <styles.boxText>
                <styles.text>
                        <styles.textBold>Completar perfil:</styles.textBold> Preencha suas informações para encontrar pacientes.
                </styles.text>
            </styles.boxText>
            
        </styles.box>
    )
}