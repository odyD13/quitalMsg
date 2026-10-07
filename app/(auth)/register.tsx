import { Link } from 'expo-router';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
        <View>

        <Text style={styles.title}>Regístrate</Text>
        <Text style={styles.subtitle}>Si ya tienes una cuenta <Link style={{color: "blue"}} href="/login">Inicia Sesión</Link></Text>
        </View>
        <TextInput style={styles.formInput} placeholder="Username" />
        <TextInput style={styles.formInput} placeholder="Email" />
        <TextInput style={styles.formInput} secureTextEntry placeholder="Password" />
        <Button title='crear cuenta'/>
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