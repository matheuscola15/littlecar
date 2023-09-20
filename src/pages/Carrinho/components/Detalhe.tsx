import React from "react"
import { View, Image ,Text, StyleSheet} from "react-native"
import logo from '/littlecar/assets/logo.png'

export default function Detalhe(){
    return<>
        <Text style={style.nome}>Carrinho de Compras</Text>
        <View style={style.fazenda}>
            <Image source={logo} style={style.imagemFazenda}/>
        <Text style={style.nomeFazenda}>Fazenda Etec Cidade do Livro</Text>
        </View>
        <Text style={style.descricao}>Uma cesta com produtos selecionados cuidadosamente
            da fazenda direto para a sua cozinha.</Text>
        <Text style={style.preco}>R$ 40,00</Text>
    </>
}

const style = StyleSheet.create({
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