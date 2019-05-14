import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
      clasification: "",
      genres: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleInputChange(event) {
    const text = event.target.name;
    this.setState({
      [text]: event.target.value,
    })
  }
  handleGenreChange(event){
    const genre = event.target.value;
    let arr = this.state.genres;
    if(arr.length===3){
      alert('Se ha alcanzado el máx de géneros')
    }
    else{
    arr.push(genre);
    this.setState({
      genres : arr
    })
  }
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
          <h2>Clasification</h2>
          <label>A</label>
          <input type="radio" onChange = {this.handleInputChange} name="clasification" value="a" checked/>
          <label>7</label>
          <input type="radio" onChange = {this.handleInputChange} name="clasification" value="7"/>
          <label>12</label>
          <input type="radio" onChange = {this.handleInputChange} name="clasification" value="12" />
          <label>16</label>
          <input type="radio" onChange = {this.handleInputChange} name="clasification" value="16"/>
          <label>18</label>
          <input type="radio" onChange = {this.handleInputChange} name="clasification" value="18"/>

          <input type="checkbox" onChange = {this.handleGenreChange} name="genre" value="comedy"/>
          <label>comedy</label>
          <input type="checkbox" onChange = {this.handleGenreChange} name="genre" value="drama"/>
          <label>drama</label>
          <input type="checkbox" onChange = {this.handleGenreChange} name="genre" value="horror"/>
          <label>horror</label>
          <input type="checkbox" onChange = {this.handleGenreChange} name="genre" value="fantasy"/>
          <label>fantasy</label>
          <input type="checkbox" onChange = {this.handleGenreChange} name="genre" value="action"/>
          <label>action</label>
        </form>
        <div className="card">
          <h1 className="name">{this.state.name}</h1>
          <p className="description">{this.state.description}</p>
          <p className="language">{this.state.language}</p>
          <p className="clasification">{this.state.clasification}</p>
        </div>
      </div>
    );
  }
}


export default App;
