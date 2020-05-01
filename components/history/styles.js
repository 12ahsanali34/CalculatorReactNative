import { StyleSheet } from 'react-native'
const styles = StyleSheet.create ({
    container: {
        justifyContent:'space-between',
        alignItems:'center',
        flex:1,
        paddingBottom:10
    },
    text:{
        fontSize:30,
        margin:5,
        color:'#60499d',
        fontWeight:'500',
        textAlign:'center'
    },
    back:{
        textAlign:'left',
        padding:10,
        color:'blue',
        backgroundColor:'#60499d',
    },
    clear:{
        width:'100%',
        justifyContent:'center',
        alignItems:'flex-end',
        height:50,
        paddingHorizontal:10
    },
    clearText:{
        color:'blue',
    },
 })

 export default styles;