import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerStyle: {
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginRight: 16,
        marginLeft: 16,
        marginTop: 5,
        marginBottom: 5
    },
    boldStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red'
    },  
    textStyle: {
        marginBottom: 10 
    }
});

export default styles;
