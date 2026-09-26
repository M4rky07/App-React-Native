import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import animesIniciais from '../Data/Animes';
import ModalAnime from '../components/ModalAnimes';

export default function Animes({ navigation }) {

  const [modalVisivel, setModalVisivel] = useState(false);

  const [animes, setAnimes] = useState(animesIniciais);

  const [animeSelecionado, setAnimeSelecionado] = useState(null);

  useEffect(() => {
    carregarAnimes();
  }, []);

  async function carregarAnimes() {
    try {
      const dados = await AsyncStorage.getItem('animes');

      if (dados) {
        setAnimes(JSON.parse(dados));
      }
    } catch (erro) {
      console.log('Erro ao carregar animes:', erro);
    }
  }

  async function salvarAnimes(novaLista) {
    try {
      await AsyncStorage.setItem(
        'animes',
        JSON.stringify(novaLista)
      );

      setAnimes(novaLista);
    } catch (erro) {
      console.log('Erro ao salvar animes:', erro);
    }
  }

  function adicionarAnime(novoAnime) {

    const novaLista = [...animes, novoAnime];

    salvarAnimes(novaLista);
  }

  function selecionarAnime(anime) {

    setAnimeSelecionado(anime);

    setModalVisivel(true);
  }

  function editarAnime(animeEditado) {

    const novaLista = animes.map((anime) => {

      if (anime === animeSelecionado) {
        return animeEditado;
      }

      return anime;
    });

    salvarAnimes(novaLista);

    setAnimeSelecionado(null);
    setModalVisivel(false);
  }

  function deletarAnime() {

    const novaLista = animes.filter((anime) => {

      return anime !== animeSelecionado;
    });

    salvarAnimes(novaLista);

    setAnimeSelecionado(null);
    setModalVisivel(false);
  }

  function abrirCadastro() {

    navigation.navigate('CadastroAnime', {
      adicionarAnime: adicionarAnime,
    });
  }

  function fecharModal() {

    setModalVisivel(false);

    setAnimeSelecionado(null);
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

          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => selecionarAnime(anime)}
          >

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

          </TouchableOpacity>

        ))}

      </ScrollView>

      <TouchableOpacity
        style={styles.botao}
        onPress={abrirCadastro}
      >

        <Text style={styles.textoBotao}>
          + Adicionar Anime
        </Text>

      </TouchableOpacity>

      <ModalAnime
        visivel={modalVisivel}
        fecharModal={fecharModal}
        adicionarAnime={adicionarAnime}
        animeSelecionado={animeSelecionado}
        editarAnime={editarAnime}
        deletarAnime={deletarAnime}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#11111b',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 15,
    color: '#9999aa',
    marginBottom: 20,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 12,
    backgroundColor: '#1c1c2b',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#2b2b40',
  },

  posicao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#6c3cff',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginRight: 15,
  },

  info: {
    flex: 1,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  genero: {
    color: '#9999aa',
    marginTop: 5,
    fontSize: 14,
  },

  nota: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  botao: {
    backgroundColor: '#6c3cff',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});