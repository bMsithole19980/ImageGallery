import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import ImageDetails from '../components/ImageDetails'

const ImageViewerScreen = ({ route }) => {
    const { imageDetails } = route.params;
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageDetails.imagePath }} style={styles.image} />
            <ImageDetails image={ImageDetails} />
        </View>
    )
}

export default ImageViewerScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    image: {
        width: "100%",
        height: "80%",
        resizeMode: 'contain',
    }
})