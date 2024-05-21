import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element {
    return (
        <View style={styles.footer} >
<TouchableOpacity>
                    <Image
                        source={require('../assets/images/menu.png')}
                        style={styles.footerIcon}
                    />
                    </TouchableOpacity>
                    
                <TouchableOpacity >
                    <Image
                        source={require('../assets/images/home.png')}
                        style={styles.footerIcon}

                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/profile.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/lupa.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>    </View>
    );

}
const styles = StyleSheet.create({
    footer: {
        borderTopWidth: 1,
        backgroundColor: '#f0f0f0', // Alterado para um cinza claro para contrastar com o fundo branco
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15, // Ajustado para um valor menor para um espaçamento mais fino
        paddingHorizontal: 20, // Adicionado para criar um espaço horizontal confortável
        shadowColor: "#000", // Adicionado para dar sombra
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Opicional para Android
    },

    footerIcon: {
        width: 24, // Reduzido para um tamanho mais adequado
        height: 24, // Reduzido para manter proporção
        margin: 10, // Adicionado para criar espaço entre os ícones
    },
});

export default Footer;