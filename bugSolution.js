```javascript
import * as ImagePicker from 'expo-image-picker';

async function pickImage() {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    if (result.uri) {
      // Use the image URI
      console.log('Image URI:', result.uri);
    } else {
      console.error('Image URI is null or undefined');
      // Handle the case where the URI is null or undefined
      alert('An error occurred while selecting the image.');
    }
  }
}
```