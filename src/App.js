import React from 'react';
import './App.css';
import axios from 'axios';
import Tyrell from "../src/components/Tyrell";


 class App extends React.Component {
   constructor(props){
    super(props);
    this.state={
      tyrell: null,
      targaryen:null,
      lannister: null,
      baratheon: null,
      baratheonR: null
    }
  }

  componentDidMount(){
    const requestTyrell=axios.get("https://anapioficeandfire.com/api/characters/16");
    const requestTargaryen=axios.get("https://www.anapioficeandfire.com/api/houses/378");
    const requestLannister=axios.get("https://www.anapioficeandfire.com/api/houses/229");
    const requestBaratheon=axios.get("https://www.anapioficeandfire.com/api/houses/17");
    const requestBaratheonR=axios.get("https://www.anapioficeandfire.com/api/characters/901");
    axios.all([requestTyrell,requestTargaryen, requestLannister, requestBaratheon, requestBaratheonR])
    .then(axios.spread((...responses)=> {
     this.setState({tyrell: responses[0].data});
     this.setState({targaryen: responses[1].data});
     this.setState({lannister: responses[2].data});
     this.setState({baratheon: responses[3].data});
     this.setState({baratheonC: responses[4].data});
    })).catch(errors=>{console.log(errors)})
  }

  render(){
  return (
    <div className="App">
      <h1></h1>
    </div>
  );
}
   }
export default App;
