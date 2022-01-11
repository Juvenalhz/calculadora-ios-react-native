import React from 'react'
import { Text, Touchable, TouchableOpacity, View } from 'react-native'
import { appTheme } from '../theme/appTheme'

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
    accion: ( numText : string ) => void;
}

export const BotonCal = ({ texto, color = '#2D2D2D', ancho = false, accion }: Props) => {

    return (
        <TouchableOpacity onPress={ () => accion( texto ) }>
            <View style={{
                ...appTheme.boton,
                backgroundColor: color,
                width: (ancho) ? 180 : 80
            }}>
                <Text style={{
                    ...appTheme.botonTexto,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}>
                    {texto}
                </Text>
            </View>
        </TouchableOpacity>

    )
}
