import React from 'react';
import { StyleSheet, Text, View, Picker, Button, ScrollView } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: '',
      pants:'',
      shoes:'',
    };
  }

  submit() {

  }

  render() {
    const appTitle = (
      <View style={styles.appTitle}>
        <Text style={styles.appTitleText}>AI-vremea</Text>
      </View>
    )

    const topPick = (
      <View style={styles.pickDiv}>
        <Text style={styles.pickTitle}>Top</Text>
        <Picker
          selectedValue={this.state.top}
          mode='dropdown'
          onValueChange={(itemValue, itemIndex) => this.setState({top: itemValue})}>
          <Picker.Item label="None" value="None" />
          <Picker.Item label="T-shirt" value="T-shirt" />
          <Picker.Item label="Blouse" value="Blouse" />
          <Picker.Item label="Jacket" value="Jacket" />
          <Picker.Item label="Hoodie" value="Hoodie" />
        </Picker>
      </View>
    );

    const pantsPick = (
      <View style={styles.pickDiv}>
        <Text style={styles.pickTitle}>Pants</Text>
        <Picker
          selectedValue={this.state.pants}
          mode='dropdown'
          onValueChange={(itemValue, itemIndex) => this.setState({pants: itemValue})}>
          <Picker.Item label="None" value="None" />
          <Picker.Item label="Jeans" value="Jeans" />
          <Picker.Item label="Shorts" value="Shorts" />
          <Picker.Item label="3/4's" value="3/4's" />
          <Picker.Item label="Trouesers" value="Trouesers" />
        </Picker>
      </View>
    );

    const shoesPick = (
      <View style={styles.pickDiv}>
        <Text style={styles.pickTitle}>Shoes</Text>
        <Picker
          selectedValue={this.state.shoes}
          mode='dropdown'
          onValueChange={(itemValue, itemIndex) => this.setState({shoes: itemValue})}>
          <Picker.Item label="None" value="None" />
          <Picker.Item label="flip-flops" value="flip-flops" />
          <Picker.Item label="Sport shoes" value="Sport shoes" />
          <Picker.Item label="Boots" value="Boots" />
          <Picker.Item label="Event Shoes" value="Event Shoes" />
        </Picker>
      </View>
    );

    const submitButton = (
      <View style={styles.buttonContainer}>
        <Button
          onPress={this.submit}
          title="submit"/>
      </View>
    );

    return (
      <ScrollView style={styles.container}>
        {appTitle}
        {topPick}
        {pantsPick}
        {shoesPick}
        {submitButton}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex:1,
    flexDirection: 'column',
  },
  appTitle: {
    flexDirection:'row',
    justifyContent:'center'
  },
  appTitleText: {
    fontSize: 30,
  },
  pickDiv: {
    paddingLeft: 10,
  },
  pickTitle: {
    paddingLeft: 9,
    fontSize: 20,
  },
  buttonContainer:{
    margin: 50,
  }
});
