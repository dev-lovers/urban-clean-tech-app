import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Text, Avatar } from "react-native-paper";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Card style={styles.card}>
          <Card.Title
            title="Bem-vindo(a)!"
            subtitle="Acompanhe a coleta de lixo na sua área"
            left={(props) => <Avatar.Icon {...props} icon="map-marker" />}
          />
          <Card.Content>
            <Text style={styles.text}>
              Veja a localização dos containers de lixo e o status do caminhão
              de coleta.
            </Text>
          </Card.Content>
        </Card>
        <Button
          mode="contained"
          icon="refresh"
          style={styles.button}
          onPress={() => console.log("Atualizar localização")}
        >
          Atualizar Localização
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  card: {
    marginBottom: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
  },
});

export default HomeScreen;
