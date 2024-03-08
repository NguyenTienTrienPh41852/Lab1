import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, Touchable, TouchableOpacity } from "react-native";
const L22SectionView = ({ text1, text2, text3, text4, text5, text6, text7, text8, text9, imageSource }) => {
    return (
        <View style={styles.container1}>
            <Text style={styles.title}>{text1}</Text>
            <Text style={styles.text2}>{text2}</Text>
            <Text style={styles.title}>{text3}</Text>
            <Text style={styles.text2}>{text4}</Text>
            <Text style={styles.title}>{text5}</Text>
            <Text style={styles.text2}>{text6}</Text>
            <Text style={styles.title}>{text7}</Text>
            <Text style={styles.text2}>{text8}</Text>
            <Text style={styles.title}>{text9}</Text>
            <Image source={imageSource} style={styles.image} />
        </View>
    );
}
const L22SectionView2 = ({text1, text2, text3, text4, text5,text6})=>{
    return(
        <View style={styles.container1}>
        <Text style={styles.title}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>
        <Text style={styles.title}>{text3}</Text>
        <Text style={styles.text2}>{text4}</Text>
        <Text style={styles.title}>{text5}</Text>
        <Text style={styles.text2}>{text6}</Text>
        <TouchableOpacity style={styles.btnChitiet}>
            <Text style={styles.chitiet} >CHI TIẾT</Text>
        </TouchableOpacity>
    </View>
    )
}
const Lab12 = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={{fontSize:30,fontWeight:'bold',marginTop:20,marginBottom:20,color:'black'}}>Lịch trình</Text>
            <L22SectionView
                text1="Địa điểm"
                text2="Hồ Tràm- Vũng Tàu"
                text3="Thời gian"
                text4={"09:00 AM - 12:00 AM, 12/12/2024"}
                text5={"Phương tiện di chuyển"}
                text6={"Xe bus"}
                text7={"Thời gian"}
                text8={"21:00 - 22:00"}
                text9={"Hình ảnh"}
                imageSource={{ uri: 'https://www.anlamtravel.vn/storage/pagedata/100921/img/images/menu/2_1.jpg' }}
            />
             <Text style={{fontSize:30,fontWeight:'bold',marginTop:20,marginBottom:20,color:'black'}}>Khách sạn</Text>
            <L22SectionView2
                text1={"Tên khách sạn"}
                text2={"Hồng quỳnh"}
                text3={"Giờ mở cửa"}
                text4={"06:00 AM - 12:00 AM"}
                text5={"Địa điểm"}
                text6={"234 Quang Trung, Hồ Chí Minh"}
                
            />
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
      
        height: '100%',
        backgroundColor: '#eae8e8',
    },
    container1: {
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000000',
        elevation:50
    },
    title: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
        borderRadius: 5,
    },
    text2: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        borderRadius: 5,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        borderRadius: 5,
    },
    btnChitiet:{
        width:'100%',
        height:40,

        backgroundColor:'#1e90e8',
        justifyContent:'center',
        alignItems:'center'
    },
    chitiet:{
        color:'white',
        fontWeight:'bold',
        fontSize:15
    }
});
export default Lab12;