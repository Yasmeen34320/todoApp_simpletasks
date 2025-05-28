import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Button, Checkbox, Icon, IconButton, TextInput } from 'react-native-paper'
import { Alert } from 'react-native';

export default function TodoList() {
    const [tasks, setTasks] = React.useState([]);
    const [name, setName] = React.useState('');
    const [doneTasks, setDoneTasks] = React.useState(0);
  return (
    <>
    <View style={{backgroundColor:'#fff',flex:1}}>
      <View style={{
        width: "90%",
        backgroundColor: "#b58566",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginTop: 20,
        padding: 10,
        paddingVertical: 20,
        alignSelf: 'center'
      }}>
        <Text style={{
          color: 'white',
          fontSize: 30,
          letterSpacing: 2,
          fontFamily: 'courier',
          fontWeight: 'bold'
        }}>
          Todo List
        </Text>
      </View>

      {/* Wrap inputs inside a container */}
      <View style={{flexDirection: 'row', width: "80%", alignSelf: 'center', marginTop: 20 }}>
        <TextInput
          activeOutlineColor='#b58566' 
          style={{ marginBottom: 20,width:200,color:'#b58566'}}
          mode="outlined"
          label="Task"
          value={name}
          onChangeText={text => {setName(text)
            // console.log(text)
            }
          }
         />
       <Button textColor="#b58566" style={{fontSize:18,marginLeft:10 , width:150 , height: 50, borderRadius: 10,backgroundColor:'#f8e4d7',color:'#b58566', justifyContent: 'center',marginTop: 5}}
       icon="plus" mode="contained" onPress={() => {
          if (!name.trim()) {
      Alert.alert("Invalid Input", "Task name cannot be empty.");
      return;
    }
    if (name.trim().length < 3) {
      Alert.alert("Too Short", "Task name must be at least 3 characters.");
      return;
    } 
        setTasks([...tasks, { name, done: false }]);
         setName('');
       }}>
    Add
  </Button>
      </View>

       <Text style={{ marginBottom:20,color: 'black', fontSize: 18, marginTop: 10,alignSelf: 'center',fontWeight:'bold',fontSize:25,letterSpacing:3 }}>{doneTasks} done of {tasks.length} Tasks</Text>
       <FlatList
       data={tasks}
       renderItem={({ item, index }) => (
        <View style={{flexDirection:'row',alignItems:'center', backgroundColor:'white' ,width:'90%',borderRadius:10,alignSelf:'center',marginBottom:30,padding:20, elevation: 4}} >
            <Checkbox color='#b58566'
      status={item.done ? 'checked' : 'unchecked'}
      onPress={() => {
        item.done = !item.done;
        setTasks([...tasks]);
        setDoneTasks(doneTasks + (item.done ? 1 : -1));
      }}
    />
            <Text style={{textDecorationLine:(item.done)?'line-through':'none',flex:1 ,fontSize:22 , marginLeft:10,letterSpacing:2}}>{item.name}</Text>

  <IconButton
  icon="trash-can"
  size={28}          // <-- specify icon size here
  style={{justifyContent:'center',alignItems:'center'}}
  iconColor="red"
  onPress={() => {
    setDoneTasks(doneTasks - (item.done ? 1 : 0));
    // Remove the item from the tasks array
    setTasks(tasks.filter(task => task.name !== item.name));
  }}></IconButton>
        </View>
         )}
       >

       </FlatList>
       
</View>
    </>
  )
}
