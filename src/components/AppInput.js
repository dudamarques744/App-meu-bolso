import { Text, TextInput, view, StyleSheet, codegenNativeComponent } from 'react-native';
import { COLORS,RADIUS, SPACING } from '../constants/theme';

export default function AppInput({ label, error, ...props}) {
    return (
        <View style={styles.container}> 
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput styles={[styles.input,error&&styles.errorInput]} 
        placeholderTextColor={COLORS.muted}  {...props} />
        {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {margiBottom: SPACING.md},
    label: {color: COLORS.Text, fortWeigth: '600', marginnBottom:6},
    input: {
        backgroundColor: '#fff',
        bordeWidth: 1,
        borderColor: COLORS.border,
        borderRadius: RADIUS.md,
        padding: SPACING.sm,
        fontSize: 16
    },
    errorInput: {borderColor: COLORS.danger},
    error:{color: COLORS.danger, fontSize:12, marginTop: 4}
 });