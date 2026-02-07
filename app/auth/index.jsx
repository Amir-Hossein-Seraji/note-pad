import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
const AuthScreen = ()=>{
    // const { login, register } = useAuth();
    // const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{isRegistering ? "Sign Up" : "Login"}</Text>
            {error ? <Text style={styles.error}>{error}</Text>:null}

            <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor='#aaa'
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                keyboardType='email-address'
            />

            <TextInput
                style={styles.input}
                placeholder='Password'
                placeholderTextColor='#aaa'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                textContentType='none'
            />
            {isRegistering && (
                <TextInput
                style={styles.input}
                placeholder='Confirm Password'
                placeholderTextColor='#aaa'
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                textContentType='none'
                />
            )}
            <TouchableOpacity style={styles.button} onPress={handleAuth}>
                <Text style={styles.buttonText}>
                {isRegistering ? 'Sign Up' : 'Login'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
});

export default AuthScreen;