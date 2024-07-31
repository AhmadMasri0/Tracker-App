import { Pressable, StyleSheet, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'

export const IconButton = ({ icon, size, color, onPress }) => {

    return <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={onPress}>
        <View style={styles.buttonContainer}>
            <Ionicons name={icon} size={size} color={color} />
        </View>
    </Pressable>
}

const styles = StyleSheet.create({

    buttonContainer: {
        marginHorizontal: 10,
        padding: 6,
        borderRadius: 24
    },
    pressed: {
        opacity: 0.65
    }
})