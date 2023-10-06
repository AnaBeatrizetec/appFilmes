import React from 'react'
import {View, Text, Image} from 'react-native'
import { useRoute } from '@react-navigation/native'
import styles from './style';


export default function Details(){


    const routes = useRoute();
    return(
        <View style={styles.container}>
        
            <Image style={styles.images} source = {require (`../../Img/${routes.params.imagem}`)} />
            <Text> {routes.params.titulo} </Text>
            <Text style={styles.textNota}>{routes.params.nota}</Text>
        </View>
    )
}