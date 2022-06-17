import { Text, View, Image } from 'react-native';
import { styles } from './styles';

const Show = ({ route }) => {
    const { name, image, status, species, gender, origin, location } = route.params.item;
    return (
        <View style={styles.container}>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>{name}</Text>
                <Image style={styles.img} source={{ uri: image }} />
            </View>
            <View style={styles.viewInfo}>
                <View style={styles.rowInfo}>
                    <View style={styles.cellLeft}>
                        <Text style={styles.key}>Especie</Text>
                    </View>
                    <View style={styles.cellRight}>
                        <Text style={styles.value}>{species}</Text>
                    </View>
                </View>
                <View style={styles.rowInfo}>
                    <View style={styles.cellLeft}>
                        <Text style={styles.key}>Estatus</Text>
                    </View>
                    <View style={styles.cellRight}>
                        <Text style={styles.value}>{status}</Text>
                    </View>
                </View>
                <View style={styles.rowInfo}>
                    <View style={styles.cellLeft}>
                        <Text style={styles.key}>Género</Text>
                    </View>
                    <View style={styles.cellRight}>
                        <Text style={styles.value}>{gender}</Text>
                    </View>
                </View>
                <View style={styles.rowInfo}>
                    <View style={styles.cellLeft}>
                        <Text style={styles.key}>Origen</Text>
                    </View>
                    <View style={styles.cellRight}>
                        <Text style={styles.value}>{origin.name}</Text>
                    </View>
                </View>
                <View style={styles.rowInfo}>
                    <View style={styles.cellLeft}>
                        <Text style={styles.key}>Locación</Text>
                    </View>
                    <View style={styles.cellRight}>
                        <Text style={styles.value}>{location.name}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Show;