import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useEffect, useState } from 'react';

export default function ModalGeneros({
  visivel,
  fecharModal,
  adicionarGenero,
  generoSelecionado,
  editarGenero,
  deletarGenero,
}) {

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {

    if (generoSelecionado) {

      setNome(generoSelecionado.nome);
      setDescricao(generoSelecionado.descricao);

    } else {

      setNome('');
      setDescricao('');

    }

  }, [generoSelecionado, visivel]);

  function salvar() {

    const genero = {
      id: generoSelecionado
        ? generoSelecionado.id
        : Date.now(),

      nome: nome,
      descricao: descricao,
    };

    if (generoSelecionado) {

      editarGenero(genero);

    } else {

      adicionarGenero(genero);

    }

    fecharModal();
  }

  function excluir() {
    deletarGenero();
  }

  return (
    <Modal
      visible={visivel}
      transparent={true}
      animationType="slide"
      onRequestClose={fecharModal}
    >

      <View style={styles.fundo}>

        <View style={styles.modal}>

          <Text style={styles.titulo}>
            {generoSelecionado
              ? 'Editar Gênero'
              : 'Adicionar Gênero'}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nome do gênero"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={descricao}
            onChangeText={setDescricao}
          />

          <TouchableOpacity
            style={styles.botaoSalvar}
            onPress={salvar}
          >

            <Text style={styles.textoBotao}>
              {generoSelecionado
                ? 'Salvar Alterações'
                : 'Adicionar Gênero'}
            </Text>

          </TouchableOpacity>

          {generoSelecionado && (

            <TouchableOpacity
              style={styles.botaoExcluir}
              onPress={excluir}
            >

              <Text style={styles.textoBotao}>
                Deletar Gênero
              </Text>

            </TouchableOpacity>

          )}

          <TouchableOpacity
            style={styles.botaoCancelar}
            onPress={fecharModal}
          >

            <Text style={styles.textoCancelar}>
              Cancelar
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </Modal>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '90%',
    backgroundColor: '#1c1c2b',
    padding: 22,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#2b2b40',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#11111b',
    borderWidth: 1,
    borderColor: '#36364d',
    borderRadius: 10,
    padding: 13,
    marginBottom: 12,
    color: '#ffffff',
    fontSize: 15,
  },

  botaoSalvar: {
    backgroundColor: '#6c3cff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },

  botaoExcluir: {
    backgroundColor: '#c62828',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  botaoCancelar: {
    padding: 15,
    alignItems: 'center',
    marginTop: 5,
  },

  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },

  textoCancelar: {
    color: '#9999aa',
    fontWeight: 'bold',
    fontSize: 15,
  },
});