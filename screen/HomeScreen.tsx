import React, {useState} from 'react';
import {Text, StyleSheet, View, Button, TextInput, Alert} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const HomeScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const kirimData = () => {
    //Alert.alert('Data', email);
    navigation.navigate('Profile', {email: email, password: password});
  };

  const tarikData = () => {
    navigation.navigate('Proyeklist');
  };
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting flexDirection to "row".
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 0}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center',
          }}>
          Demo form
        </Text>
      </View>
      <View style={{flex: 0.5}}>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Button title="Submit" onPress={kirimData} />
        <Button title="Tarik data" onPress={tarikData} />
      </View>
    </View>
  );
};

export default HomeScreen;
