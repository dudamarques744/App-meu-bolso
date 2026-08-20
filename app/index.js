import React,{userState} from "react";
import { StylesSheet, 
    View, Text, TouchableOpacity, 
    KeyboardAvoidingView, Platform} from 'react-native';
    import {router } from 'expo-router';
    import AppInput from '../src/components/AppInput';
    import AppButton from '../src/components/AppButton';


    export default function Login() {
        const [email, setEmail]= userState('');
        const [password, setPassword]= userState('');
        const [loading, setLoading]= userState(false);
        
        
        return(
            <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS==='ios'?'padding':undefined}>
            <View>
                <Text style={StylesSheet.title}>Meu bolso</Text>
                <Text style={StylesSheet.subtitle}>Controle suas finanças.</Text>
                <AppInput label="E-mail"placeholder="Digite seu e-mail"
                autoCapitalize="nome"keyboardType="email-address"
                value={email} onChangeText={setEmail}/>

                <AppIput label="Senha" secureTextEntry value={passWord}
                onChangeText={setPassword} placeholder="Digite sua senha"/>

                <AppButton title="Entrar" loading={loading}/>
                <TouchableOpacity onPress={()=>router.push('/register')}>
                <Text styles={styles.link}>Criar nova conta</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        );
    }

    const styles= StylesSheet.create({
    title:{fontSize:34, fontWeight:'900', color:'#2f3640', 
        textAlign: 'center'},
        subtitle: {color:'#7f8c8d', textAlign:'center', marginTop: 8,
            marginBottom: 32},
            link:{color:'#008f22', textAlign: 'center', marginTop: 20,
                fontWeight:'700'}
    });
    
