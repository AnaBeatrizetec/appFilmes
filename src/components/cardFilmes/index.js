import React from 'react'
import {View, Image,Text,TouchableOpacity} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function CardMovies({titulo,imagem,nota}){

    const navigation = useNavigation();

    return(

        <TouchableOpacity onPress = { () => navigation.navigate('details',{titulo:titulo,imagem:imagem,nota:nota}) } style = {styles.containerJogos}>

            <Image style={styles.images} source = {require (`../../Img/${imagem}`)} />
            <Text style={styles.textNota}>{titulo}</Text>
            <Text style={styles.textNota}>{nota}</Text>

        </TouchableOpacity>

    );
}