import React,{useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Dimensions
} from 'react-native';
import Input from '../../components/InputBox';
import Buttons from '../../components/buttons';
import History from '../../components/history';
import styles from './styles';


const Home = () => {
    const [showCalculator, setShowCalculator] = useState(true);
    const [val, setVal] = useState('');
    const [lastValue, setLastValue] = useState('');
    const [sign, setSign] = useState('');
    const [history, setHistory] = useState([]);

    // for detecting orientation

    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [orientationStatus, setOrientationStatus] = useState('portrait');


    const handleChange = (e) =>{
        setVal(val + e)
    }

    const handleClear = (e) =>{
        setVal('')
        setLastValue('')
        setSign('')
    }

    const clearHistory = () =>{
        setHistory([])
    }

    const handleSigns = (e) =>{
       if(val !== ""){
        setSign(e)
        setLastValue(val)
        setVal('')
       }
       else{
        setSign(e)
        setVal('')
       }
    }

    const isInDecimal = (num) =>{
        return num % 1 != 0
    }

    // detecting orientation

    const isPortrait = () =>{
        const dim = Dimensions.get('window');
        return dim.height >= dim.width
    }

    const calculate = () =>{
        if(sign == "-"){
            let value = Number(lastValue) - Number(val)
            setHistory([...history, lastValue + ' ' + sign + ' ' + val + ' = ' + (isInDecimal(value) ? value.toFixed(2).toString() : value.toString())])
            setVal(isInDecimal(value) ? value.toFixed(2).toString() : value.toString())

        }
        if(sign == "+"){
            let value = Number(lastValue) + Number(val)
            setHistory([...history, lastValue + ' ' + sign + ' ' + val + ' = ' + (isInDecimal(value) ? value.toFixed(2).toString() : value.toString())])
            setVal(isInDecimal(value) ? value.toFixed(2).toString() : value.toString())
        }
        if(sign == "/"){
            let value = Number(lastValue) / Number(val)
            setHistory([...history, lastValue + ' ' + sign + ' ' + val + ' = ' + (isInDecimal(value) ? value.toFixed(2).toString() : value.toString())])
            setVal(isInDecimal(value) ? value.toFixed(2).toString() : value.toString())

        }
        if(sign == "*"){
            let value = Number(lastValue) * Number(val)
            setHistory([...history, lastValue + ' ' + sign + ' ' + val + ' = ' + (isInDecimal(value) ? value.toFixed(2).toString() : value.toString())])
            setVal(isInDecimal(value) ? value.toFixed(2).toString() : isInDecimal(value) ? value.toFixed(2).toString() : value.toString())

        }
        setLastValue('')
        setSign('')
    }
    Dimensions.addEventListener('change',()=>{
        setOrientationStatus(isPortrait() ? 'portrait' : 'landscape')
    })
    const Sheight = Dimensions.get('window').height;
    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}>
                <View style={{flexDirection:'row', minHeight:Sheight}}>
                    {(showCalculator || orientationStatus == "landscape") && <View style={styles.container}>
                        {orientationStatus == "portrait" && <Text 
                            onPress={()=>setShowCalculator(!showCalculator)}
                            style={styles.historyText}>
                            {showCalculator ? 'History' : 'Back'}
                        </Text>}
                        <Input 
                            style={{fontSize:50}}
                            value={val}
                            onChangeText={(el)=>setVal(el)}/>
                        <View>
                            <View style={styles.buttonContainer}>
                                <Buttons background="red" onPress={handleClear} text="AC" width={'75%'}/>
                                <Buttons onPress={(e)=>{handleSigns(e)}} text="/" width={'25%'}/>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Buttons onPress={(e)=>{handleChange(e)}} text="7" width={'25%'}/>
                                <Buttons onPress={(e)=>{handleChange(e)}} text="8" width={'25%'}/>
                                <Buttons onPress={(e)=>{handleChange(e)}} text="9" width={'25%'}/>
                                <Buttons onPress={(e)=>{handleSigns(e)}} text="*" width={'25%'}/>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Buttons onPress={(e)=>{handleChange(e)}} text="4" width={'25%'}/>
                                <Buttons onPress={(e)=>{handleChange(e)}} text="5" width={'25%'}/>
                                <Buttons onPress={(e)=>{handleChange(e)}} text="6" width={'25%'}/>
                                <Buttons onPress={(e)=>{handleSigns(e)}} text="-" width={'25%'}/>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Buttons onPress={(e)=>{handleChange(e)}} text="1" width={'25%'}/>
                                <Buttons onPress={(e)=>{handleChange(e)}} text="2" width={'25%'}/>
                                <Buttons onPress={(e)=>{handleChange(e)}} text="3" width={'25%'}/>
                                <Buttons onPress={(e)=>{handleSigns(e)}} text="+" width={'25%'}/>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Buttons onPress={(e)=>{handleChange(e)}} text="0" width={'50%'}/>
                                <Buttons onPress={(e)=>{handleChange(e)}} text="." width={'25%'}/>
                                <Buttons onPress={calculate} text="=" width={'25%'}/>
                            </View>
                        </View>
                    </View>}
                    {(!showCalculator || orientationStatus == "landscape") &&
                        <History 
                            showBack={orientationStatus == "portrait" ? true : false}
                            onClear={clearHistory} onClose={()=>setShowCalculator(true)}
                            data={history}/>}
                </View>
        </ScrollView>

    );
};
export default Home;
