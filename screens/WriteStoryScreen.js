import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Header } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

export default class WriteStoryScreen extends React.Component {
   render(){
       return(
           <View>
                <Header
                    backgroundColor= {'#3ec1d3'}
                    centerComponent= {{
                        text: 'Story Hub',
                        style: { color: '#f6f7d7', fontSize: 20, fontWeight: 'bold' },
                    }}
                />

                <View style= {styles.container}>
                    <View style={styles.inputView}>
                        <TextInput 
                            style= {styles.inputBox} 
                            placeholder= "Story Title"
                        />
                    </View>
                   
                    <View style={styles.inputView}>
                        <TextInput 
                            style= {styles.inputBox} 
                            placeholder= "Author"
                        />
                    </View>
                   
                    <View style={styles.inputView}>
                        <TextInput 
                            style= {[styles.storyInputBox,{textAlignVertical: "center"}]} 
                            placeholder= "Write your story" 
                            multiline= {true}
                        /> 
                    </View> 

                    <View style={styles.inputView}>
                        <TouchableOpacity style= {styles.button}>
                            <Text style= {styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
           </View>
       )
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        color: '#ff9a00',
        fontWeight: 'bold'
    },
    inputView:{
        flexDirection: 'row',
        margin: 30
    },
    inputBox:{
        marginTop: 200,
        width: 300,
        height: 40,
        borderWidth: 1,
        fontSize: 20
    },
    storyInputBox:{
        marginTop: 200,
        width: 300,
        height: 200,
        borderWidth: 1,
        fontSize: 20
    },
    button:{
        backgroundColor: '#ff165d',
        width: 100,
        height: 40,
        borderWidth: 1.5,
        marginTop: 400
    }
});
