import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const proyekCollection = firestore().collection('proyek');
const ProfileScreen = ({navigation, route}) => {

  proyekCollection.add({
    name: route.params.email,
    age: route.params.password,
  }).then(() => {
    console.log('Proyek Added');
  });
  return (
    <View>
      <Text> This is a Home Screen
            email yang dikirim adalah {route.params.email}
        passwordnya adalah {route.params.password}
      </Text>
    </View>
  );
}

export default ProfileScreen;
