import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const ListItem=(props)=>{
    return(
        <TouchableOpacity onPress={props.DeleteItemList.bind(this,props.id)}>
            <View style={styles.listItems}>
                <Text >{props.data}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles=StyleSheet.create({
    listItems:{
        marginVertical:5,
        padding:5,
        borderRadius:2,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'#ffc3a0',
      },
});

/* <ScrollView>
        {listItem.map((item,index)=>{
          return (
            <View style={styles.listItems} key={index}>
              <Text >{item}</Text>
            </View>
          )
        })}
    </ScrollView> */

export default ListItem;