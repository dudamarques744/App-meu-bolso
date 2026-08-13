import { ActivityIndicator, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { COLORS, RADIUS, SPACING } from '../contants/theme';

export default function AppButton(
    { title, onPress, loading=false, disable=false} 
) {
    return (
        <TouchableOpacity
        style={[styles.button, (disable || loading)
            && styles.disabled]}
            onPress={onPress} 
            disable={disabled || loading} 
           > 
           {loading ?
           <ActivityIndicador color="#fff" /> :
           <Text style={styles.title}>{title}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {backgroundColor: COLORS.primary,
        padding: SPACING.md,
        borderRadius: RADIUS.md,
        alignItems: 'center',
    },
    disabled: {opacity: .6},
    text:{color: '#fffl', fontSize: 16, fontWeight: ' 700'},
});