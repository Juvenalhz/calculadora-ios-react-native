
import { StyleSheet } from 'react-native';

export const appTheme = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black'
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right'
    },
    resultadopequeno: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 20,
        textAlign: 'right'
    },
    calculadora: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',

    },
    fila: { 
        flexDirection: 'row',
        justifyContent: "center" 
    },
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: "center",
        marginHorizontal:10,
        backgroundColor: "#2D2D2D",
        marginBottom: 10

    },
    botonTexto: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        fontWeight: '300'
    },



})
