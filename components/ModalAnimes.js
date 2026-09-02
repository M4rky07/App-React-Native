import { Modal, View,Text, TextInput, TouchableOpacity, StyleSheet,} from 'react-native';

import { useState } from 'react';

export default function ModalAnime({
  visivel,
  fecharModal,
  adicionarAnime,
}) {
  const [nome, setNome] = useState('');
  const [nota, setNota] = useState('');
  const [genero, setGenero] = useState('');

  function cadastrar() {
    if (nome === '' || nota === '' || genero === '') {
      return;
    }

    const novoAnime = {
      posicao: '🎬',
      nome: nome,
      nota: nota,
      genero: genero,
    };

    adicionarAnime(novoAnime);

    setNome('');
    setNota('');
    setGenero('');

    fecharModal();
  }

  return (
    <Modal
      visible={visivel}
      animationType="slide"
      transparent={true}
      onRequestClose={fecharModal}
    >
      <View style={styles.fundoModal}>

        <View style={styles.modal}>

          <Text style={styles.titulo}>
            Adicionar Anime
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nome do anime"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.input}
            placeholder="Nota"
            value={nota}
            onChangeText={setNota}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Gênero"
            value={genero}
            onChangeText={setGenero}
          />

          <View style={styles.botoes}>

            <TouchableOpacity
              style={styles.botaoCancelar}
              onPress={fecharModal}
            >
              <Text style={styles.textoBotao}>
                Cancelar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoAdicionar}
              onPress={cadastrar}
            >
              <Text style={styles.textoBotao}>
                Adicionar
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fundoModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modal: {
    width: '85%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },

  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  botaoCancelar: {
    backgroundColor: 'gray',
    padding: 12,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },

  botaoAdicionar: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});