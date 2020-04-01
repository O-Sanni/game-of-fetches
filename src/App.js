import React from 'react';
import './App.css';
import axios from 'axios';

 class App extends React.Component {
   constructor(props){
    super(props);
    this.state={
      isLoaded:false,
      data: []
    }
  }

  componentDidMount(){
    //let stark ="http://www.anapioficeandfire.com/api/houses/362";
    //let starkC="http://www.anapioficeandfire.com/api/characters/232";
    
    const requestTyrell=axios.get("https://anapioficeandfire.com/api/characters/16");
    const requestTargaryen=axios.get("https://www.anapioficeandfire.com/api/houses/378");
    const requestLannister=axios.get("https://www.anapioficeandfire.com/api/houses/229");
    const requestBaratheon=axios.get("https://www.anapioficeandfire.com/api/houses/17");
    const requestBaratheonR=axios.get("https://www.anapioficeandfire.com/api/characters/901");
    axios.all([requestTyrell,requestTargaryen, requestLannister, requestBaratheon, requestBaratheonR])
    .then(axios.spread((...responses)=> {
      const responseTyrell=responses[0];
      const responseTargaryen=responses[1];
      const responseLannister=responses[2];
      const responseBaratheon=responses[3];
      const responseBaratheonR=responses[4];
      console.log(responseTyrell,responseTargaryen,responseLannister,responseBaratheon,responseBaratheonR);
    })).catch(errors=>{console.log(errors)})
  }
  render(){
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
   }
export default App;
