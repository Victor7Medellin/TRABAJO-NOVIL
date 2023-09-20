import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
        };
    }

    handleLogin = () => {
        // Aquí puedes agregar la lógica de autenticación, como enviar los datos a un servidor.
        // Si hay un error de autenticación, puedes establecer el mensaje de error en 'errorMessage'.
    };

    handleRegister = () => {
        this.props.navigation.navigate('Register');
    };
    
    handleForgotPassword = () => {
        this.props.navigation.navigate('ForgotPassword');
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
                    <Icon name="user" size={20} color="white" style={styles.icon} />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Username"
                        placeholderTextColor="#003f5c"
                        onChangeText={(text) => this.setState({ username: text })}
                    />
                </View>

                <View style={styles.inputView}>
                    <Icon name="lock" size={20} color="white" style={styles.icon} />
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                </View>

                <Text style={styles.errorText}>{this.state.errorMessage}</Text>
                <TouchableOpacity style={styles.loginBtn} onPress={this.handleLogin}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handleRegister}>
                    <Text style={styles.passwordText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handleForgotPassword}>
                    <Text style={styles.passwordText}>Forgot password?</Text>
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
    errorText: {
        color: 'red',
        marginBottom: 20,
    },
    loginBtn: {
        width: 200,
        backgroundColor: '#fb5b5a',
        borderRadius: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
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

export default LoginScreen;