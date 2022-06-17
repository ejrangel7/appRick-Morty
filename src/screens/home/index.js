import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
            <View>
                <Image style={styles.logo} source={require('../../img/logo.jpg')} />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Characters')}>
                    <View>
                        <Text style={styles.buttonText}>Inicio</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;
