import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Detalhe from "./components/Detalhe";

import Topo from "./components/Topo";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
    return(
    <>
        <Topo/>
        <View style={style.carrinho}>
            <Detalhe/>
        </View>
    </>
    )
}

const style = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        color: "white",
        textAlign: "center",
        fontSize: 24,
        lineHeight: 26,
        padding: 16,
        fontFamily: "MontSerratBold"
    },
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontFamily: 'MontSerratBold'
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontFamily: "MontSerratBold",
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontFamily: "MontSerratItalic",
    },
    preco: {
        fontSize: 26,
        fontFamily: "MontSerratRegular",
        color: "#2A9F85",
        marginTop: 8
    }
})