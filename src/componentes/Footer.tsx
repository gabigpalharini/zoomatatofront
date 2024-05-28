import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element {
  
        const navigation = useNavigation();
       // const route = useRoute();

    return(
        <View style={styles.footer}>
      

      <TouchableOpacity onPress={() =>navigation.navigate('CadastroAnimal')}>
        <Image source={require('../assets/images/profile.png')}
         style={styles.footerIcon}/>
      </TouchableOpacity>

      <TouchableOpacity >
        <Image source={require('../assets/images/home.png')}
         style={styles.footerIcon}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>navigation.navigate('EditarAnimal')}>
        <Image source={require('../assets/images/lupa.png')}
         style={styles.footerIcon}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ListagemAnimal')}>
        <Image source={require('../assets/images/menu.png')}
        style={styles.footerIcon}/>
      </TouchableOpacity>
     </View>
    );

    }
const styles = StyleSheet.create({
    footer: {
        borderTopWidth: 1,
        backgroundColor: '#fefae0',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15, 
        paddingHorizontal: 20, 
        shadowColor: "#000", // Adicionado para dar sombra
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    },

    footerIcon: {
        width: 24, 
        height: 24, 
        margin: 10, 
    },
});

export default Footer;