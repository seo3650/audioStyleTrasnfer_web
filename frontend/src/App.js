import Firstpage from './pages/Firstpage';
import {Component} from 'react';


class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="App">
        <Firstpage></Firstpage>
      </div>
    );
  }

}


export default App;
