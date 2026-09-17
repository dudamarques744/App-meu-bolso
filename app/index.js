import React, { useState } from "react";
import { StyleSheet, 
    View, Text, TouchableOpacity, 
    KeyboardAvoidingView, Platform } from 'react-native';
import { router } from 'expo-router';
import AppInput from '../src/components/AppInput';
import AppButton from '../src/components/AppButton';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    
    
    return (
        <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View>
            <Text style={styles.title}>Meu bolso</Text>
            <Text style={styles.subtitle}>Controle suas finanças.</Text>
            <AppInput label="E-mail" placeholder="Digite seu e-mail"
            autoCapitalize="none" keyboardType="email-address"
            value={email} onChangeText={setEmail}/>

            <AppInput label="Senha" secureTextEntry value={password}
            onChangeText={setPassword} placeholder="Digite sua senha"/>

            <AppButton title="Entrar" loading={loading}/>
            <TouchableOpacity onPress={() => router.push('/register')}>
            <Text style={styles.link}>Criar nova conta</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
title: {fontSize: 34, fontWeight: '900', color: '#2f3640', 
    textAlign: 'center'},
    subtitle: {color: '#7f8c8d', textAlign: 'center', marginTop: 8,
        marginBottom: 32},
        link: {color: '#008f22', textAlign: 'center', marginTop: 20,
            fontWeight: '700'}
});