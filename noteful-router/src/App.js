import React from 'react';
import Header from './Header';
import FolderList from './FolderList';
import NoteList from './NoteList';
import DummyStore from './DummyStore';
import { Route } from 'react-router-dom'
import './App.css';

// function Foo() {
//   return <p>I want to only shoe when the path is /foo</p>
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: DummyStore
    }
  }
  
  render() {
  return (
    <div className="App">
      {/* <Route
        path='/notes'
        component={NoteList}
      /> */}
      <Header />
      <FolderList store={this.state.store.folders}/>
      <NoteList store={this.state.store.notes}/>
      
    </div>
    
  );
}
}
export default App;