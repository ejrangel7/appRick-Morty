import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000'
    },
    row: {
        flexDirection: 'row',
        backgroundColor: '#202329',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginBottom: 5,
        borderRadius: 5
    },
    cellLeft: {
        flex: 1
    },
    img: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    cellRight: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 5
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    species: {
        fontSize: 15,
        fontWeight: '400',
        color: 'orange'
    },
    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyText: {
        color: 'white',
        fontSize: 30
    },
    emptyImg: {
        width: 300,
        height: 400
    }
});