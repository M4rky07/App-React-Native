import {StyleSheet,Text,View, ScrollView,TouchableOpacity,} from 'react-native';

import { useState } from 'react';

import animesIniciais from '../Data/Animes';
import ModalAnime from '../components/ModalAnimes';

export default function Animes() {

  const [modalVisivel, setModalVisivel] = useState(false);

  const [animes, setAnimes] = useState(animesIniciais);

  function adicionarAnime(novoAnime) {
    setAnimes([...animes, novoAnime]);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        🎬 Meus Animes
      </Text>

      <Text style={styles.subtitulo}>
        Lista de animes cadastrados
      </Text>

      <ScrollView>

        {animes.map((anime, index) => (
          <View style={styles.card} key={index}>

            <Text style={styles.posicao}>
              {anime.posicao}
            </Text>

            <View style={styles.info}>

              <Text style={styles.nome}>
                {anime.nome}
              </Text>

              <Text style={styles.genero}>
                {anime.genero}
              </Text>

            </View>

            <Text style={styles.nota}>
              ⭐ {anime.nota}
            </Text>

          </View>
        ))}

      </ScrollView>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setModalVisivel(true)}
      >
        <Text style={styles.textoBotao}>
          + Adicionar Anime
        </Text>
      </TouchableOpacity>

      <ModalAnime
        visivel={modalVisivel}
        fecharModal={() => setModalVisivel(false)}
        adicionarAnime={adicionarAnime}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
  },

  posicao: {
    fontSize: 25,
    marginRight: 15,
  },

  info: {
    flex: 1,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  genero: {
    color: 'gray',
    marginTop: 5,
  },

  nota: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  botao: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },

});