import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    viewTitle: {
        flex: 1,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        color: 'white'
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 5
    },
    viewInfo: {
        flex: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#202329'
    },
    rowInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    cellLeft: {
        flex: 1,
        justifyContent: 'center'
    },
    key: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'orange',
        textTransform: 'uppercase'
    },
    cellRight: {
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: 5
    },
    value: {
        fontSize: 12,
        color: 'white'
    }

});