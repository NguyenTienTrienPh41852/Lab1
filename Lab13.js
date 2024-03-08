import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const Lab13 = () => {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    const [isInputValid1, setIsInputValid1] = useState(true);
    const [isInputValid2, setIsInputValid2] = useState(true);
    const [isInputValid3, setIsInputValid3] = useState(true);
    const [isInputValid4, setIsInputValid4] = useState(true);
    const [onFocus, setonFocus] = useState(false);
    const [onFocus1, setonFocus1] = useState(false);
    const [onFocus2, setonFocus2] = useState(false);
    const [onFocus3, setonFocus3] = useState(false);




    const handleFocus1 = () => {
        setIsInputValid1(true);
        setonFocus(true);
    }

    const handleBlur1 = () => {
        setIsInputValid1(inputValue1.trim() !== '');
        setonFocus(false);
    };

    const handleFocus2 = () => {
        setIsInputValid2(true);
        setonFocus1(true)
    }

    const handleBlur2 = () => {
        setIsInputValid2(inputValue2.trim() !== '');
        setonFocus1(false)
    };
    const handleFocus3 = () => {
        setIsInputValid3(true);
        setonFocus2(true)
    }

    const handleBlur3 = () => {
        setIsInputValid3(inputValue2.trim() !== '');
        setonFocus2(false)
    };
    const handleFocus4 = () => {
        setIsInputValid4(true);
        setonFocus3(true)
    }

    const handleBlur4 = () => {
        setIsInputValid4(inputValue2.trim() !== '');
        setonFocus3(false)
    };

    const handleSubmit = () => {
        setIsInputValid1(inputValue1.trim() !== '');
        setIsInputValid2(inputValue2.trim() !== '');
        setIsInputValid3(inputValue3.trim() !== '');
        setIsInputValid4(inputValue4.trim() !== '');
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInputBox
                label="Title "
                placeholder="moi nhap lieu"
                value={inputValue1}
                onChangeText={text => {
                    setInputValue1(text);
                    setIsInputValid1(true);
                }}
                onBlur={handleBlur1}
                onFocus={handleFocus1}
                isInputValid={isInputValid1}
                isFocus={onFocus}
            />
            <TextInputBox
                label="Title "
                placeholder="moi nhap lieu"
                value={inputValue2}
                onChangeText={text => {
                    setInputValue2(text);
                    setIsInputValid2(true);
                }}
                onBlur={handleBlur2}
                onFocus={handleFocus2}
                isInputValid={isInputValid2}
                isFocus={onFocus1}
            />
            <TextInputBox
                label="Title "
                placeholder="moi nhap lieu"
                value={inputValue3}
                onChangeText={text => {
                    setInputValue3(text);
                    setIsInputValid3(true);
                }}
                onBlur={handleBlur3}
                onFocus={handleFocus3}
                isInputValid={isInputValid3}
                isFocus={onFocus2}
            />
            <TextInputBox
                label="Title "
                placeholder="moi nhap lieu"
                value={inputValue4}
                onChangeText={text => {
                    setInputValue4(text);
                    setIsInputValid4(true);
                }}
                onBlur={handleBlur4}
                onFocus={handleFocus4}
                isInputValid={isInputValid4}
                isFocus={onFocus3}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const TextInputBox = ({ label, placeholder, value, onChangeText, onBlur, onFocus, isInputValid, isFocus }) => {
    return (
        <View style={styles.box}>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.title}>{label} </Text>
                
                </View>
                <Text style={{ color: 'red' }}>*</Text>
            </View>
            <TextInput
                style={[styles.textInput,
                !isInputValid ? styles.inputError : null,
                isFocus ? styles.inputFocus : null
                ]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                onFocus={onFocus}
            />
            {!isInputValid && <Text style={{ color: 'red' }}>Error</Text>}
            {!isInputValid && <Text>Không được để trống</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 10,
        height: 40,
        paddingLeft: 10,
    },
    box: {
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        color: 'black'
    },
    inputError: {
        borderColor: 'red',
        backgroundColor: '#ffd1d1',
    },
    inputFocus: {
        borderColor: '#00bdfc',
        backgroundColor: '#cfeff9',
    }
});

export default Lab13;
