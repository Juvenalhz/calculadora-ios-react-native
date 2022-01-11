import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCal } from '../components/BotonCal';
import { appTheme } from '../theme/appTheme';

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const CalculadorScreen = () => {

    const [numeroAnterior, setnumeroAnterior] = useState('0')

    const [numero, setnumero] = useState('0')

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setnumero('0');
        setnumeroAnterior('0');
    }

    const armarNumero = (numeroTexto: string) => {
        if (numero.includes('.') && numeroTexto === '.') return;
        if (numero.startsWith('0') || numero.startsWith('-0')) {

            //punto decimal
            if (numeroTexto === '.') {
                setnumero(numero + numeroTexto)
            }
            //Evaluar si es cero y hay punto
            else if (numeroTexto === '0' && numero.includes('.')) {
                setnumero(numero + numeroTexto)
            }
            //Evaluar si es diferente de cero y no tiene punto
            else if (numeroTexto !== '0' && !numero.includes('.')) {
                setnumero(numeroTexto)
            }
            //Evitar el 000.0
            else if (numeroTexto === '0' && !numero.includes('.')) {
                setnumero(numero)
            }

        } else {
            setnumero(numero + numeroTexto)
        }
    }

    const postitivoNegativo = () => {
        if (numero.includes('-')) {
            setnumero(numero.replace('-', ''))
        } else {
            setnumero('-' + numero)
        }
    }

    const btnDelete = () => {

        if ((numero.length <= 2 && numero.includes('-')) || numero.length <= 1) setnumero('0')

        else setnumero(numero.substring(0, numero.length - 1))

    }

    const cambiarNumPorAnteior = () => {
        if (numero.endsWith('.')) {
            setnumeroAnterior(numero.slice(0, -1));

        } else {
            setnumeroAnterior(numero);
        }

        setnumero('0');
    }

    const btnDividir = () => {
        cambiarNumPorAnteior()
        ultimaOperacion.current = Operadores.dividir
    }

    const btnSumar = () => {
        cambiarNumPorAnteior()
        ultimaOperacion.current = Operadores.sumar
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnteior()
        ultimaOperacion.current = Operadores.multiplicar
    }

    const btnRestar = () => {
        cambiarNumPorAnteior()
        ultimaOperacion.current = Operadores.restar
    }

    const calcular = () => {

        if (numero === '0') return;

        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setnumero(`${num1 + num2}`)
                break;

            case Operadores.restar:
                setnumero(`${num2 - num1}`)
                break;

            case Operadores.multiplicar:
                setnumero(`${num1 * num2}`)
                break;

            case Operadores.dividir:
                setnumero(`${num2 / num1}`)
                break;
        }

        setnumeroAnterior('0')
    }

    return (
        <View style={appTheme.calculadora}>
            {
                (numeroAnterior !== '0') && <Text style={appTheme.resultadopequeno}>{numeroAnterior}</Text>
            }

            <Text style={appTheme.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{numero}</Text>

            <View style={appTheme.fila}>
                <BotonCal texto="C" color="#9B9B9B" accion={limpiar} />
                <BotonCal texto="+/-" color="#9B9B9B" accion={postitivoNegativo} />
                <BotonCal texto="del" color="#9B9B9B" accion={btnDelete} />
                <BotonCal texto="/" color="#FF9427" accion={btnDividir} />
            </View>

            <View style={appTheme.fila}>
                <BotonCal texto="7" accion={armarNumero} />
                <BotonCal texto="8" accion={armarNumero} />
                <BotonCal texto="9" accion={armarNumero} />
                <BotonCal texto="x" color="#FF9427" accion={btnMultiplicar} />
            </View>

            <View style={appTheme.fila}>
                <BotonCal texto="4" accion={armarNumero} />
                <BotonCal texto="5" accion={armarNumero} />
                <BotonCal texto="6" accion={armarNumero} />
                <BotonCal texto="-" color="#FF9427" accion={btnRestar} />
            </View>

            <View style={appTheme.fila}>
                <BotonCal texto="1" accion={armarNumero} />
                <BotonCal texto="2" accion={armarNumero} />
                <BotonCal texto="3" accion={armarNumero} />
                <BotonCal texto="+" color="#FF9427" accion={btnSumar} />
            </View>

            <View style={appTheme.fila}>
                <BotonCal texto="0" ancho accion={armarNumero} />
                <BotonCal texto="." accion={armarNumero} />
                <BotonCal texto="=" color="#FF9427" accion={calcular} />
            </View>

        </View>
    )
}
