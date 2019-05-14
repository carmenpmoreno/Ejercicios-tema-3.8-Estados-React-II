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
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);

  }

  handleInputChange(event) {
    this.setState({
      name: event.target.value,
    })
  }
  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    })
  }
  handleSelectChange(event) {
    this.setState({
      language: event.target.value,
    })
  }
  render() {
    return (
      <div className="App">
        <form>
          <label htmlFor="name" />
          <input 
            id="name" 
            type="text" 
            value={this.state.name}
            onChange = {this.handleInputChange}
          />
          <textarea 
          id="text"
          onChange = {this.handleDescriptionChange}
          />
          <select 
            value={this.state.language}
            onChange = {this.handleSelectChange}
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
