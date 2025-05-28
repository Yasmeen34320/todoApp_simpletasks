import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Box from './Box';

const Task2 = () => {
    const COLORS = [
        {colorName:'Base03',hexCode:'#002b36'},
        {colorName:'Base02',hexCode:'#073642'},
        {colorName:'Base01',hexCode:'#586e75'},
        {colorName:'Base00',hexCode:'#657b83'},
        {colorName:'Base0',hexCode:'#839496'},
        {colorName:'Base1',hexCode:'#93a1a1'},
        {colorName:'Base2',hexCode:'#eee8d5'},
        {colorName:'Base3',hexCode:'#fdf6e3'},
        {colorName:'Yellow',hexCode:'#b58900'},
        {colorName:'Orange',hexCode:'#cb4b16'},
        {colorName:'Red',hexCode:'#dc322f'},
        {colorName:'Magenta',hexCode:'#d33682'},
        {colorName:'Cyan',hexCode:'#2aa198'},
        {colorName:'Green',hexCode:'#859900'},
        {colorName:'Orange',hexCode:'#cb4b17'},
        {colorName:'Red',hexCode:'#dc3221'},
        {colorName:'Magenta',hexCode:'#d33683'},
        {colorName:'Cyan',hexCode:'#2aa199'},
        {colorName:'Green',hexCode:'#859910'},
    ];

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={COLORS}
                renderItem={({item}) => <Box {...item} />}
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>
                            Here are some boxes of different colors
                        </Text>
                    </View>
                }
                ListEmptyComponent={<Text>No Data</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        paddingTop: 50,
    },
    flatList: {
        height: '100%',
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center',
    },
});

export default Task2;