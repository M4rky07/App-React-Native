import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import animesIniciais from '../Data/Animes';

export default function Animes({ navigation }) {
  const [animes, setAnimes] = useState(animesIniciais);

  useFocusEffect(
    useCallback(() => {
      carregarAnimes();
    }, [])
  );

  async function carregarAnimes() {
    try {
      const dados = await AsyncStorage.getItem('animes');

      if (dados) {
        setAnimes(JSON.parse(dados));
      } else {
        setAnimes(animesIniciais);
      }
    } catch (erro) {
      console.log('Erro ao carregar animes:', erro);
    }
  }

  async function salvarAnimes(novaLista) {
    try {
      await AsyncStorage.setItem('animes', JSON.stringify(novaLista));
      setAnimes(novaLista);
    } catch (erro) {
      console.log('Erro ao salvar animes:', erro);
      Alert.alert('Erro', 'Não foi possível salvar as alterações.');
    }
  }

  function abrirCadastro() {
    navigation.navigate('CadastroAnime');
  }

  function abrirEdicao(anime) {
    navigation.navigate('EditarAnime', { anime });
  }

  function excluirAnime(anime) {
    Alert.alert(
      'Excluir anime',
      `Deseja excluir "${anime.nome}"?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            const novaLista = animes.filter((item) => {
              if (anime.id !== undefined && anime.id !== null) {
                return item.id !== anime.id;
              }

              return item !== anime;
            });

            await salvarAnimes(novaLista);
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎬 Meus Animes</Text>
      <Text style={styles.subtitulo}>Lista de animes cadastrados</Text>

      <ScrollView>
        {animes.map((anime, index) => (
          <View
            key={anime.id ?? `${anime.nome}-${index}`}
            style={styles.card}
          >
            <Text style={styles.posicao}>{anime.posicao}</Text>

            <View style={styles.info}>
              <Text style={styles.nome}>{anime.nome}</Text>
              <Text style={styles.genero}>{anime.genero}</Text>
            </View>

            <Text style={styles.nota}>⭐ {anime.nota}</Text>

            <View style={styles.acoes}>
              <TouchableOpacity
                style={styles.botaoEditar}
                onPress={() => abrirEdicao(anime)}
              >
                <Text style={styles.textoAcao}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoExcluir}
                onPress={() => excluirAnime(anime)}
              >
                <Text style={styles.textoAcao}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.botao}
        onPress={abrirCadastro}
      >
        <Text style={styles.textoBotao}>+ Adicionar Anime</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11111b',
    padding: 20,
    paddingTop: 45,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 14,
    color: '#9999aa',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#1c1c2b',
    borderWidth: 1,
    borderColor: '#36364d',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
  },

  posicao: {
    color: '#6c3cff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  info: {
    flex: 1,
    marginBottom: 8,
  },

  nome: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  genero: {
    color: '#9999aa',
    fontSize: 14,
    marginTop: 4,
  },

  nota: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 12,
  },

  acoes: {
    flexDirection: 'row',
    gap: 10,
  },

  botaoEditar: {
    flex: 1,
    backgroundColor: '#36364d',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  botaoExcluir: {
    flex: 1,
    backgroundColor: '#7f2638',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  textoAcao: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  botao: {
    backgroundColor: '#6c3cff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
