import { StyleSheet, Text, View, ScrollView } from 'react-native';
import animes from '../Data/Animes';

export default function TopAnimes() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        🏆 Top Animes
      </Text>

      <Text style={styles.subtitulo}>
        Os animes mais bem avaliados
      </Text>

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
});