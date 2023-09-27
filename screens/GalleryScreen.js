import { FlatList, Pressable,Text, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GalleryItem from '../components/GalleryItem';
import { useRoute } from '@react-navigation/native';
import { EvilIcons, Feather } from '@expo/vector-icons';

const GalleryScreen = ({ navigation }) => {
  const [images, setImages] = useState([]);
  const route = useRoute();

  useEffect(() => {
    if (route.params?.capturedImage) {
      const sampleImages = route.params?.capturedImage.map((imageUri, index) => ({
        id: index + 1,
        imagePath: imageUri,
        latitude: 123.45,
        longitude: 67.89
      }));
      setImages(sampleImages)

    }

  }, [route.params?.capturedImage]);

  const handleImagePress = (item) => {
    navigation.navigate('ImageViewer', { imageDetails: item })

  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Pictures</Text>
      <View style={styles.icons}>
        <Pressable style={styles.icon}>
          <EvilIcons name="search" size={24} color="white" />
        </Pressable>
        <Pressable style={styles.icon}>
          <Feather name="more-vertical" size={24} color="white" />
        </Pressable>

      </View>
      </View>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <GalleryItem image={item} onPress={() => handleImagePress(item)} />
        )} />

    </View>
  )
}

export default GalleryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16
  },
  header:{
    color: 'white'
  },
  icons: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  icon: {
    marginLeft: 16,
  }

})