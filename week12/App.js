import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Card} from 'react-native-elements';

export default function App() {
  //Binding the function with class
    const [cat, setCat] = useState();

    const [votes, setVotes] = useState(false);

    function increaseBingusVote(value){
      setCat('Bingus the Sphynx');
      setVotes(true);
    }

    function increaseFloppaVote(value){
      setCat('Floppa the Caracal');
      setVotes(true);
    }

    function increaseSoggaVote(value){
      setCat('Sogga the Leptailurus');
      setVotes(true);
    }
    
    return (
        <View style={styles.container}>
        { votes ? (
          <View style={styles.container}>
            <Text>You voted for {cat}!</Text>
          </View>
        ) : (
            <View>
            <Text style={styles.headerText}>Vote for your favorite cat meme!</Text>
            <Card>
              <Button title="Bingus" onPress={(value) => (increaseBingusVote('Bingus the Sphynx'))}/>
            </Card>
            <Card.Divider/>
            <Card>
              <Button title="Floppa" onPress={(value) => (increaseFloppaVote('Floppa the Caracal'))}/>
            </Card>
            <Card.Divider/>
            <Card>
              <Button title="Sogga" onPress={(value) => (increaseSoggaVote('Sogga the Leptailurus'))}/>
            </Card>
            </View>
        )
        }
         </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }})



