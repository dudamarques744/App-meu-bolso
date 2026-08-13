import React,{userState} from "react";
import { StylesSheet, 
    View, Text, TouchableOpacity, 
    NativeAppEventEmitter} from 'react-native';
    import AppInput from '../components/AppInput';
    import AppButton from '../components/AppButton';


    export default function Login() {
        const [email, setEmail]= userState('');
        const [password, setPassword]= userState('');
        const [loading, setLoading]= userState(false);
        
        
        return(
            <View>
                <Text>Meu bolso</Text>
                <Text>Controle suas finanças.</Text>
                <AppInput label="E-mail"placeholder="Digite seu e-mail"
                autoCapitalize="nome"keyboardType="email-address"
                value={email} onChangeText={setEmail}/>

                <AppIput label="Senha" secureTextEntry value={passWord}
                onChangeText={setPassword} placeholder="Digite sua senha"/>

                <AppButton title="Entrar" onPress={} loading={loading}/>
                <TouchableOpacity>
                <Text>Criar nova conta</Text>
                </TouchableOpacity>
            </View>
        );
    }
    
