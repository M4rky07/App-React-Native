import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditarAnime({ navigation, route }) {
  const anime = route.params.anime;

  const [nome, setNome] = useState(anime.nome ?? '');
  const [nota, setNota] = useState(String(anime.nota ?? ''));
  const [genero, setGenero] = useState(anime.genero ?? '');
  const [posicao, setPosicao] = useState(String(anime.posicao ?? ''));

  async function salvar() {
    if (!nome.trim() || !nota.trim() || !genero.trim() || !posicao.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const notaNumero = Number(nota);
    const posicaoNumero = Number(posicao);

    if (
      !Number.isFinite(notaNumero) ||
      notaNumero < 0 ||
      notaNumero > 10 ||
      !Number.isInteger(posicaoNumero) ||
      posicaoNumero < 1
    ) {
      Alert.alert(
        'Dados inválidos',
        'A nota deve ser de 0 a 10 e a posição deve ser um número inteiro positivo.'
      );
      return;
    }

    try {
      const dados = await AsyncStorage.getItem('animes');
      const animes = dados ? JSON.parse(dados) : [];

      const novaLista = animes.map((item) => {
        const selecionado =
          anime.id !== undefined && anime.id !== null
            ? item.id === anime.id
            : item === anime;

        if (selecionado) {
          return {
            ...item,
            nome: nome.trim(),
            nota: notaNumero,
            genero: genero.trim(),
            posicao: posicaoNumero,
          };
        }

        return item;
      });

      await AsyncStorage.setItem('animes', JSON.stringify(novaLista));
      navigation.goBack();
    } catch (erro) {
      console.log('Erro ao editar anime:', erro);
      Alert.alert('Erro', 'Não foi possível salvar as alterações.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar Anime</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do anime"
        placeholderTextColor="#777788"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Nota"
        placeholderTextColor="#777788"
        value={nota}
        onChangeText={setNota}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Gênero"
        placeholderTextColor="#777788"
        value={genero}
        onChangeText={setGenero}
      />

      <TextInput
        style={styles.input}
        placeholder="Posição"
        placeholderTextColor="#777788"
        value={posicao}
        onChangeText={setPosicao}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.botaoSalvar}
        onPress={salvar}
      >
        <Text style={styles.textoBotao}>Salvar alterações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoCancelar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoCancelar}>Cancelar</Text>
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
    marginBottom: 25,
  },

  input: {
    backgroundColor: '#1c1c2b',
    borderWidth: 1,
    borderColor: '#36364d',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    color: '#ffffff',
    fontSize: 15,
  },

  botaoSalvar: {
    backgroundColor: '#6c3cff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },

  botaoCancelar: {
    padding: 16,
    alignItems: 'center',
    marginTop: 5,
  },

  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  textoCancelar: {
    color: '#9999aa',
    fontWeight: 'bold',
    fontSize: 16,
  },
});