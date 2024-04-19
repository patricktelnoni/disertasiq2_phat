import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import CustomSmallText from '../component/CustomSmallText.tsx';

const ProyeklistScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [proyeklist, setProyeklist] = useState([]); // Initial empty array of users

  const getDetail = () => {
    navigation.navigate('ProyekDetail');
  };
  useEffect(() => {
    const subscriber = firestore()
      .collection('proyek')
      .onSnapshot(querySnapshot => {
        const proyeklist = [];

        querySnapshot.forEach(documentSnapshot => {
          proyeklist.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setProyeklist(proyeklist);
        setLoading(false);
      });

    return () => subscriber();
  });
  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={proyeklist}
      renderItem={({item}) => (
        <TouchableWithoutFeedback
          onPress={() => getDetail()}>
          <View>
            <Text>ID: {item.age}</Text>
            <Text>Title: {item.name}</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    />
  );

  // ...
};

export default ProyeklistScreen;
