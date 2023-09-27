import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, FontAwesome, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'

const ImageDetails = ({ image }) => {
    const [isHeartFilled, setIsHeartFilled]= useState(false);

    const handleHeartPress=()=>{
        setIsHeartFilled(!isHeartFilled);
    };
    return (
        <View style={styles.container}>
            <Image source={{ uri: image.imagePath }} style={styles.image} />
            <View style={styles.icons}>
                <Pressable style={styles.icon}
                onPress={handleHeartPress}>
                    <AntDesign 
                    name={isHeartFilled ? 'heart': 'heart'}
                     size={24} 
                     color={isHeartFilled ? 'red': 'white'} />
                </Pressable>
                <Pressable style={styles.icon}>
                    <FontAwesome name="edit" size={24} color="white" />
                </Pressable>
                <Pressable style={styles.icon}>
                    <FontAwesome name="share-alt" size={24} color="white" />
                </Pressable >
                <Pressable style={styles.icon}>
                    <MaterialCommunityIcons name="delete" size={24} color="white" />
                </Pressable >
                <Pressable style={styles.icon}>
                    <Fontisto name="more-v-a" size={24} color="white" />
                </Pressable>

            </View>
        </View>
    )
}

export default ImageDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',

    },
    text: {
        fontSize: 18,
        marginVertical: 8,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 40,
        marginBottom: 60

    },
    icon: {
        marginLeft: 60
    }
})