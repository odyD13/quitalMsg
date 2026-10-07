import { Link } from 'expo-router';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
        <View>

        <Text style={styles.title}>Iniciar sesión</Text>
        <Text style={styles.subtitle}>¿No tienes cuenta? <Link style={{color: "blue"}} href="/register">Regístrate</Link></Text>
        </View>
        <TextInput style={styles.formInput} placeholder="Email" />
        <TextInput style={styles.formInput} secureTextEntry placeholder="Password" />
        <Button title='iniciar sesión'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formInput: {
    backgroundColor: "#fafafa",
    width: "80%",
    marginVertical: 12
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "regular"
  },
});