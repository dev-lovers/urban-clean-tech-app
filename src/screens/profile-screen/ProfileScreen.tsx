import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Text, TextInput, Button } from "react-native-paper";

const ProfileScreen = () => {
  const [name, setName] = useState("João da Silva");
  const [email, setEmail] = useState("joao.silva@gmail.com");
  const [location, setLocation] = useState("Salvador, BA");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Avatar.Icon size={80} icon="account" style={styles.avatar} />
        <Text style={styles.label}>Nome</Text>
        <TextInput
          mode="outlined"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          mode="outlined"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Localização</Text>
        <TextInput
          mode="outlined"
          value={location}
          onChangeText={(text) => setLocation(text)}
          style={styles.input}
        />
        <Button
          mode="contained"
          icon="content-save"
          style={styles.button}
          onPress={() => console.log("Dados salvos")}
        >
          Salvar Alterações
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
    alignItems: "center",
  },
  avatar: {
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
  input: {
    width: "100%",
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    width: "100%",
  },
});

export default ProfileScreen;
