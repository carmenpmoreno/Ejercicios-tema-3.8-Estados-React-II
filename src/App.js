import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const text = event.target.name;
    this.setState({
      [text]: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <label htmlFor="name" />
          <input 
            id="name" 
            name="name"
            type="text" 
            value={this.state.name}
            onChange = {this.handleInputChange}
          />
          <textarea 
          name="description"
          onChange = {this.handleInputChange}
          />
          <select 
            name="language"
            value={this.state.language}
            onChange = {this.handleInputChange}
          >
            <option value="spanish">spanish</option>
            <option value="english">english</option>
            <option value="portuguese">portuguese</option>
          </select>
        </form>
        <div className="card">
          <h1 className="name">{this.state.name}</h1>
          <p className="description">{this.state.description}</p>
          <p className="language">{this.state.language}</p>
        </div>
      </div>
    );
  }
}


export default App;
