import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

export default function Inicio() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.conteudo}>

        <Text style={styles.emoji}>
          🎬
        </Text>

        <Text style={styles.titulo}>
          Top Animes
        </Text>

        <Text style={styles.subtitulo}>
          Organize e gerencie seus animes favoritos
        </Text>

        <View style={styles.destaque}>

          <Text style={styles.destaqueTitulo}>
            Bem-vindo!
          </Text>

          <Text style={styles.destaqueTexto}>
            Aqui você pode cadastrar, editar e excluir
            animes e gêneros de forma simples.
          </Text>

        </View>

        <Text style={styles.secaoTitulo}>
          O que você pode fazer?
        </Text>

        <View style={styles.card}>

          <Text style={styles.cardIcone}>
            🎥
          </Text>

          <View style={styles.cardInfo}>
            <Text style={styles.cardTitulo}>
              Animes
            </Text>

            <Text style={styles.cardTexto}>
              Cadastre seus animes, altere suas informações
              ou remova aqueles que não deseja mais.
            </Text>
          </View>

        </View>

        <View style={styles.card}>

          <Text style={styles.cardIcone}>
            🎭
          </Text>

          <View style={styles.cardInfo}>
            <Text style={styles.cardTitulo}>
              Gêneros
            </Text>

            <Text style={styles.cardTexto}>
              Organize os gêneros dos seus animes e
              mantenha suas informações atualizadas.
            </Text>
          </View>

        </View>

        <View style={styles.instrucao}>

          <Text style={styles.instrucaoTitulo}>
            Navegue pelo aplicativo
          </Text>

          <Text style={styles.instrucaoTexto}>
            Use o menu na parte inferior para acessar
            Animes e Gêneros.
          </Text>

        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11111b',
  },

  conteudo: {
    padding: 20,
    paddingTop: 45,
    paddingBottom: 30,
  },

  emoji: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 10,
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 16,
    color: '#9999aa',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
  },

  destaque: {
    backgroundColor: '#1c1c2b',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#2b2b40',
    marginBottom: 28,
  },

  destaqueTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6c3cff',
    marginBottom: 8,
  },

  destaqueTexto: {
    fontSize: 15,
    color: '#ccccdd',
    lineHeight: 22,
  },

  secaoTitulo: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 14,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c2b',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2b2b40',
  },

  cardIcone: {
    fontSize: 30,
    marginRight: 15,
  },

  cardInfo: {
    flex: 1,
  },

  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },

  cardTexto: {
    fontSize: 14,
    color: '#9999aa',
    lineHeight: 20,
  },

  instrucao: {
    backgroundColor: '#24194a',
    borderRadius: 14,
    padding: 18,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#6c3cff',
  },

  instrucaoTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 6,
  },

  instrucaoTexto: {
    fontSize: 14,
    color: '#ccccdd',
    lineHeight: 20,
  },
});