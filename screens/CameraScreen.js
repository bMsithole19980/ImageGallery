import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera } from 'expo-camera'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-web';

const CameraScreen = () => {
    const [capturedImage, setCapturedImage] = useState([]);
    const [camera, setCamera] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');

        })();
    }, [])

    const takePicture = async () => {
        if (camera) {
            const { uri } = await camera.takePictureAsync();
            setCapturedImage([...capturedImage, uri]);
            console.log(uri);
        }
    }
    const goToGallery = () => {
        navigation.navigate('Gallery', { capturedImage });

    }



    return (
        <View style={styles.container}>
            <Camera
                style={styles.preview}
                ref={(ref) => setCamera(ref)}
                type={Camera.Constants.Type.back}
            >
                <View style={styles.captureButtonContainer}>
                    <Pressable
                        onPress={goToGallery}>
                        <FontAwesome name='image' size={24} color='white' />
                    </Pressable>
                    <Pressable
                        onPress={takePicture}
                        style={styles.captureButton}>
                        <FontAwesome name='camera' size={24} color='white' />
                    </Pressable>
                    <Pressable>
                        <FontAwesome name="refresh" size={24} color="white" />
                    </Pressable>


                </View>
            </Camera>





        </View>
    )
}

export default CameraScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    captureButtonContainer: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    captureButton: {
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "transparent",

    }

})