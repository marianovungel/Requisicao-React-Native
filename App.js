import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [data, setData] = useState([])

  const getData = async()=>{
    try {
      const res = await axios.get("https://backmiti.onrender.com/user");
      setData(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

 useEffect(()=>{
  getData()
 }, [])


  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <FlatList
          data={data}
          renderItem={({item}) => <Text style={styles.item}>{item._id}</Text>}
        />
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center:{
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#999',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  item:{
    color: "red",
    marginTop: 50,
  },
  
});
