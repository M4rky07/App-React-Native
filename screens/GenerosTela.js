import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { useState } from 'react';

import generosIniciais from '../Data/Generos';
import ModalGeneros from '../components/ModalGeneros';

export default function Generos() {

  const [generos, setGeneros] = useState(generosIniciais);

  const [modalVisivel, setModalVisivel] = useState(false);

  const [generoSelecionado, setGeneroSelecionado] = useState(null);

  function adicionarGenero(novoGenero) {
    setGeneros([...generos, novoGenero]);
  }

  function selecionarGenero(genero) {
    setGeneroSelecionado(genero);
    setModalVisivel(true);
  }

  function editarGenero(generoEditado) {

    const novaLista = generos.map((genero) => {

      if (genero.id === generoSelecionado.id) {
        return generoEditado;
      }

      return genero;
    });

    setGeneros(novaLista);
    setGeneroSelecionado(null);
    setModalVisivel(false);
  }

  function deletarGenero() {

    const novaLista = generos.filter((genero) => {

      return genero.id !== generoSelecionado.id;

    });

    setGeneros(novaLista);
    setGeneroSelecionado(null);
    setModalVisivel(false);
  }

  function abrirModalAdicionar() {
    setGeneroSelecionado(null);
    setModalVisivel(true);
  }

  function fecharModal() {
    setModalVisivel(false);
    setGeneroSelecionado(null);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        🎭 Gêneros
      </Text>

      <Text style={styles.subtitulo}>
        Lista de gêneros cadastrados
      </Text>

      <ScrollView>

        {generos.map((genero) => (

          <TouchableOpacity
            key={genero.id}
            style={styles.card}
            onPress={() => selecionarGenero(genero)}
          >

            <Text style={styles.nome}>
              {genero.nome}
            </Text>

            <Text style={styles.descricao}>
              {genero.descricao}
            </Text>

          </TouchableOpacity>

        ))}

      </ScrollView>

      <TouchableOpacity
        style={styles.botao}
        onPress={abrirModalAdicionar}
      >

        <Text style={styles.textoBotao}>
          + Adicionar Gênero
        </Text>

      </TouchableOpacity>

      <ModalGeneros
        visivel={modalVisivel}
        fecharModal={fecharModal}
        adicionarGenero={adicionarGenero}
        generoSelecionado={generoSelecionado}
        editarGenero={editarGenero}
        deletarGenero={deletarGenero}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11111b',
    paddingHorizontal: 20,
    paddingTop: 25,
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

  lista: {
    paddingBottom: 10,
  },

  card: {
    backgroundColor: '#1c1c2b',
    padding: 18,
    marginBottom: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#2b2b40',
  },

  nome: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 7,
  },

  descricao: {
    fontSize: 14,
    color: '#9999aa',
    lineHeight: 20,
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