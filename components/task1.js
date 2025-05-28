import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const imageSize = width * 0.8; 

const Task1 = () => {
    const imageSrcs = [
        require('../assets/1.jpg'),
        require('../assets/2.jpg'),
        require('../assets/3.jpg'),
        require('../assets/4.jpg'),
        require('../assets/5.jpg'),
    ];

    return (
        <View style={styles.container}>
        <Text style={styles.header}>Image Slider</Text>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={imageSize + 10 * 2}
            contentContainerStyle={styles.scrollContainer}
        >
            {imageSrcs.map((item, index) => (
            <View key={index} style={styles.imageContainer}>
                <Image
                style={styles.image}
                source={item}
                resizeMode="cover"
                />
            </View>
            ))}
        </ScrollView>
        </View>
    );
}

export default Task1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        paddingTop: 55,
    },
    header: {
        color: 'brown',
        marginTop: 20,
        letterSpacing: 2,
        fontFamily: 'sans-serif',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    scrollContainer: {
        marginTop: 50,
        paddingHorizontal: 10,
    },
    imageContainer: {
        width: imageSize,
        marginHorizontal: 10,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: imageSize,
        borderRadius: 12,
    },
});