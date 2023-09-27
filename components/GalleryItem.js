import { Pressable, StyleSheet, Image, View } from 'react-native'
import React from 'react'


const GalleryItem = ({ image, onPress }) => {

    return (
        <View style={styles.container}>

            <Pressable
                onPress={onPress}
                style={styles.container}>
                <Image source={{ uri: image.imagePath }} style={styles.image} />

            </Pressable>
        </View>
    )
}

export default GalleryItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        borderRadius: 8,

    },
    image: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 16,
        marginVertical: 4,
        paddingHorizontal: 8,
    },
})