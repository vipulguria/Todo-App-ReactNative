import React,{useState} from 'react';
import { View,TextInput,Button,StyleSheet, Modal} from 'react-native';

const InputItem=(props)=>{
    const [inputText,SetInputText]=useState('');

    const inputHandler=(text)=>{
        SetInputText(text);
      }

    return(

        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} onChangeText={inputHandler} placeholder="Enter your Goal"/>
                <Button title="ADD" onPress={props.addToList.bind(this,inputText)}/>
            </View>
        </Modal>
            
        
    );
}


const styles=StyleSheet.create({
    input:{
        borderColor:'black',
        borderWidth:1,
        width:300,
        padding:5,
        borderRadius:5,
        marginBottom:10,
      },
      inputContainer:{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
      }
});
export default InputItem;