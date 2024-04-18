import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const ProyeklistScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [proyeklist, setProyeklist] = useState([]); // Initial empty array of users

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
        <View
          style={{
            height: 50,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>User ID: {item.age}</Text>
          <Text>User Name: {item.name}</Text>
        </View>
      )}
    />
  );

  // ...
};

export default ProyeklistScreen;
