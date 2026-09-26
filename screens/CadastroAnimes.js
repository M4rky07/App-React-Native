import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useState } from 'react';

export default function CadastroAnime({ navigation, route }) {
  const [nome, setNome] = useState('');
  const [nota, setNota] = useState('');
  const [genero, setGenero] = useState('');
  const [posicao, setPosicao] = useState('');

  function salvar() {
    const novoAnime = {
      posicao: Number(posicao),
      nome: nome,
      nota: Number(nota),
      genero: genero,
    };

    route.params.adicionarAnime(novoAnime);

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Cadastrar Anime
      </Text>

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
        <Text style={styles.textoBotao}>
          Cadastrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoCancelar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoCancelar}>
          Cancelar
        </Text>
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