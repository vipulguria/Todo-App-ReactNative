import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, View, FlatList,Button } from 'react-native';
import InputItem from './components/InputItem';
import ListItem from './components/ListItem';

export default function App() {
  const [listItem,setListItem]=useState([]);
  const [ismodal,setIsModal] =useState(false);


  const addToList=(iText)=>{
    setListItem([...listItem,{id:Math.random().toString(),value:iText}]);
    setIsModal(false);
  }

  const DeleteItemList=(selectedId)=>{
    setListItem((cItem)=>{
      return cItem.filter((item)=>item.id!==selectedId);
    })
    }

  
  return (
    <View style={styles.container}>

      <Button title="Add Your Goal" onPress={()=>{setIsModal(true)}}/>

      <InputItem  visible={ismodal} addToList={addToList} />
      
      <FlatList 

      keyExtractor={(item,index)=>item.id}
      data={listItem}
      renderItem={itemData=>(
        <ListItem data={itemData.item.value} id={itemData.item.id} DeleteItemList={DeleteItemList}/>
      )}

      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:80,
  },
});


