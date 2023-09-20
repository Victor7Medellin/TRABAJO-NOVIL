import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ForgotPasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    handleSendResetEmail = () => {
        
    };

    handleLogin = () => {
        this.props.navigation.navigate('Login');
    };


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Image
                        source={require('./image/perfil.png')} 
                        style={styles.logoImage}
                    />
                    <Text style={styles.logo}>TodoApp</Text>
                </View>

                <View style={styles.inputView}>
                    <Icon name="envelope" size={20} color="white" style={styles.icon} />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                </View>

                <TouchableOpacity style={styles.loginBtn} onPress={this.handleSendResetEmail}>
                    <Text style={styles.loginText}>Send</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handleLogin}>
                    <Text style={styles.passwordText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#003f5c',
        marginBottom: 40,
    },
    inputView: {
        width: 200,
        backgroundColor: '#CCC8C8',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: 'white',
    },
    loginBtn: {
        width: 200,
        backgroundColor: '#fb5b5a',
        borderRadius: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    loginText: {
        color: 'white',
    },
    passwordText: {
        marginTop: 10,
        color: 'blue',
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 175,
    },
});

export default ForgotPasswordScreen;
