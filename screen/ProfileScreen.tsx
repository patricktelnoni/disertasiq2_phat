import {Text, View} from 'react-native';

const ProfileScreen = ({navigation, route}) => {


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
