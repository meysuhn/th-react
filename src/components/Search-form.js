import React from 'react';
import { NavLink } from 'react-router-dom';

// Controlled component

class SearchForm extends React.Component {
  // Initialising state directly inside the class definition using a class property
  state = {
      value: ''
    };

  // Define event handlers as a method on the class (using two different approaches)
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.query.value); // pass the searchForm state back to onSearch in app.js
    this.setState({value: ''}); // Reset state to clear search input field after submission.
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value});
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="search"
                 name="search"
                 placeholder="Search"
                 required
                 value={this.state.value}
                 ref={(input) => this.query = input} /*see: https://teamtreehouse.com/library/displaying-the-search-results*/
                 onChange={this.handleChange}/>
                 <NavLink value={this.state.value} to="/Search" ></NavLink>
          <button type="submit" className="search-button">

            <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </button>
      </form>
    )
  }
}


export default SearchForm;


// Define EVENT HANDLERS as a method on the class (using two different approaches)
// 'this' needs to be bound to the custom method(s).
// Various ways, but most common to use arrow functions given the lexical binding.

// (1) with a bind statement such as that directly below and the associated error handler
// handleChange = this.handleChange.bind(this);

// handleChange(event) {
//   this.setState({value: event.target.value.toUpperCase()});
// }

// (2) binding on the method call, see <form> below which replaces the line directly below.
// handleSubmit = this.handleSubmit.bind(this);
