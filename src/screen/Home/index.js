
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../../src/components/header';
import Search from '../../../src/components/searchBar';
import BannerMovies from '../../../src/components/banner';
import Filmes from '../../../src/data/filmes';
import Series from '../../../src/data/series';
import CardMovies from '../../../src/components/cardFilmes';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Search></Search>
      <BannerMovies></BannerMovies>
      <View style={{width:'90%'}}>
      <FlatList
          showsHorizontalScrollIndicator = {false}
          horizontal = {true}
          data = {Filmes}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => (

            <CardMovies
            titulo = {item.nome}
            imagem = {item.imagem}
            nota = {item.nota}
            
            
            
            ></CardMovies>
      )}
      />
      <FlatList
          showsHorizontalScrollIndicator = {false}
          horizontal = {true}
          data = {Series}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => (

            <CardMovies
            titulo = {item.nome}
            imagem = {item.imagem}
            nota = {item.nota}
            
            
            
            ></CardMovies>
      )}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A29',
    alignItems: 'center',
    
  },
});
