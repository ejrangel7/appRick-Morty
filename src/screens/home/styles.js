import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    title: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold'
    },
    logo: {
        maxWidth: 300,
        maxHeight: 300
    },
    button: {
        backgroundColor: '#202329',
        width: 100,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingVertical: 10
    }
});