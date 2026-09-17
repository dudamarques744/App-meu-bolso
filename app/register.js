import React, { useState } from "react";
import { Text, KeyboardAvoidingView, StyleSheet, Platform 
} from 'react-native';
import AppInput from '../src/components/AppInput';
import AppButton from '../src/components/AppButton';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [loading, setLoading] = useState(false);

    // ↓↓↓ AQUI é a função nova que você vai adicionar ↓↓↓
    function handleRegister() {
        console.log('Cadastrando...', email, password, confirm);
    }
    // ↑↑↑ fica depois dos useState e antes do return ↑↑↑

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Text style={styles.title}>Criar conta</Text>
            <AppInput label="E-mail" autoCapitalize="none"
            keyboardType="email-address" 
            value={email} onChangeText={setEmail} />
            <AppInput label="Senha" secureTextEntry 
            value={password} onChangeText={setPassword}/>
            <AppInput label="confirmar senha" secureTextEntry
            value={confirm} onChangeText={setConfirm}/>
            {/* ↓↓↓ AQUI você adiciona o onPress no botão ↓↓↓ */}
            <AppButton title="Criar conta" onPress={handleRegister} />
            </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 24,
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: '900',
        color: '#2f3640',
        marginBottom: 28
     }
    
});