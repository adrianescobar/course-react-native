import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity 
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from '../components/ResultsDetail.js';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length) return null;
    
    return (
        <View style={ styles.containerSyle }>
            <Text style={ styles.titleStyle }>{ title }</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={ false }
                data={results}
                keyExtractor={ result => result.id }
                renderItem={ ({ item }) => {
                    return (
                        <TouchableOpacity onPress={ () => navigation.navigate('ResultsShow', { id: item.id }) }>
                            <ResultsDetail result={ item }/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    containerSyle:{
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);