import React from 'react';
import { FlatList, View, Text, StyleSheet, SectionList, Image} from 'react-native';
import Box from './Box';
const Task3 = () => {
    const sections=[
            {
                id:"0",
                title:"A",
                data:[
                    {id:"0",text:"User1",photo:"https://cdn-icons-png.flaticon.com/512/4439/4439947.png"},
                    {id:"1",text:"User2",photo:"https://cdn-icons-png.flaticon.com/512/7981/7981359.png"},
                    {id:"2",text:"User3",photo:"https://cdn-icons-png.flaticon.com/512/4439/4439977.png"},
                ]
                },
                {
                id:"1",
                title:"B",
                data:[
                    {id:"3",text:"User1",photo:"https://cdn-icons-png.flaticon.com/512/3371/3371977.png"},
                    {id:"4",text:"User2",photo:"https://cdn-icons-png.flaticon.com/512/6889/6889369.png"},
                    {id:"5",text:"User3",photo:"https://cdn-icons-png.flaticon.com/512/4439/4439947.png"},
                ]
            },
            {
                id:"2",
                title:"H",
                data:[
                    {id:"6",text:"User1",photo:"https://cdn-icons-png.flaticon.com/512/6889/6889369.png"},
                    {id:"7",text:"User2",photo:"https://cdn-icons-png.flaticon.com/512/3371/3371977.png"},
                    {id:"8",text:"User3",photo:"https://cdn-icons-png.flaticon.com/512/4842/4842456.png"},
                ]
            },
            {
                id:"3",
                title:"M",
                data:[
                    {id:"8",text:"User1",photo:"https://cdn-icons-png.flaticon.com/512/7981/7981359.png"},
                    {id:"10",text:"User2",photo:"https://cdn-icons-png.flaticon.com/512/4439/4439977.png"},
                    {id:"11",text:"User3",photo:"https://cdn-icons-png.flaticon.com/512/4439/4439947.png"},
                ]
            }
                ]

    return (
        <View style={styles.container}>
            <SectionList 
                sections={sections} 
                renderSectionHeader={({section}) => (
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>{section.title}</Text>
                    </View>
                )}
                renderItem={({item}) => (
                    <View style={styles.itemContainer}>
                        <View style={styles.imageContainer}>
                            <Image 
                                source={{ uri: item.photo }} 
                                style={styles.profileImage}
                            />
                        </View>
                        <Text style={styles.itemStyle}>{item.text}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        width: '100%',
        paddingHorizontal: 10,
    },
    headerContainer: {
        backgroundColor: 'darkblue',
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'darkblue',
    },
    header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    imageContainer: {
        backgroundColor: '#dfe6e9',
        borderRadius: 25,
        padding: 3,
    },
    profileImage: {
        width: 44,
        height: 44,
        borderRadius: 22,
    },
    itemStyle: {
        color: '#2d3436',
        fontWeight: '600',
        fontSize: 16,
        marginLeft: 15,
    },
    separator: {
        height: 20,
    },
});

export default Task3;