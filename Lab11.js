
import React from "react";
import { Text, View, StyleSheet, Pressable, Image, Touchable, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
const L11SectionView = ({ title, child, backgroundColor }) => {
    return (
        <View style={[styles.container1, { backgroundColor }]}>
           <TouchableOpacity style={{borderRadius:50,borderWidth:2,borderColor:'black'}}>
           <Icon name="chevron-back-outline" size={20} color="black" />
           </TouchableOpacity>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>{title}</Text>
            <Image style={{width:30,height:30,borderRadius:50}} source={{uri:child}}/>
        </View>
    );
}
const Lab11 = () => {
    return (
        <View style={styles.container}>
            <L11SectionView title="Header" child='https://i.pinimg.com/736x/ac/61/6e/ac616eac8a162481a2bcf42b78c198ac.jpg'  backgroundColor="#aaa456">
                <Text style={styles.title}>Day la header</Text>
            </L11SectionView>
            <L11SectionView title="Trang chủ" backgroundColor="#bbb456">
                <Text style={styles.title}>Day la content</Text>
            </L11SectionView>
            <L11SectionView title="Footer" backgroundColor="#ccc456">
                <Text style={styles.title}>Day la footer</Text>
            </L11SectionView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container1: {
        width: '100%',
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 20
    },
});
export default Lab11;