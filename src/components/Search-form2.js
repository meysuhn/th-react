import React from 'react';

// Here I need to use a controlled component

// (1) This was the initial functional component
// const SearchForm = (props) => {
//   return (
//     <form className="search-form">
//         <input type="search" name="search" placeholder="Search" required/>
//         <button type="submit" className="search-button">
//           <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
//             <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
//             <path d="M0 0h24v24H0z" fill="none"/>
//           </svg>
//         </button>
//     </form>
//   )
// }

// // (2) This is a basic class component without state
// class SearchForm extends React.Component {
//   render() {
//     return (
//       <form className="search-form">
//           <input type="search" name="search" placeholder="Search" required/>
//           <button type="submit" className="search-button">
//             <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
//               <path d="M0 0h24v24H0z" fill="none"/>
//             </svg>
//           </button>
//       </form>
//     )
//   }
// }

// // (3) Class Constructor / Super method of initialising state
// class SearchForm extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       value: 'Hola'
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
// //////////
// // Define EVENT HANDLERS as a method on the class
// handleChange(event) {
//   this.setState({value: event.target.value.toUpperCase()});
// }
//
// handleSubmit(event) {
//   alert('A name was submitted: ' + this.state.value);
//   event.preventDefault();
// }
// //////////
//
//   render() {
//     return (
//       <form className="search-form" onSubmit={this.handleSubmit}>
//           <input type="search" name="search" placeholder="Search" required value={this.state.value} onChange={this.handleChange}/>
//           <button type="submit" className="search-button">
//             <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
//               <path d="M0 0h24v24H0z" fill="none"/>
//             </svg>
//           </button>
//       </form>
//     )
//   }
// }

// (4) Initialising state directly inside the class definition using a class property
class SearchForm extends React.Component {
  state = {
      value: 'Hola'
    };

  //////////
  // Define EVENT HANDLERS as a method on the class

  // 'this' needs to be bound to the custom method(s).
  // Various ways, but most common to use arrow functions given the lexical binding.

  // (1) with a bind statement such as that directly below and the associated error handler
  // handleChange = this.handleChange.bind(this);

  // handleChange(event) {
  //   this.setState({value: event.target.value.toUpperCase()});
  // }

  // (2) binding on the method call, see <form> below which replaces the line directly below.
  // handleSubmit = this.handleSubmit.bind(this);
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  // (3) with an arrow function (not used here)
  handleChange = (event) => {
    this.setState({
      value: event.target.value.toUpperCase()});
  }

  //////////

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="search" name="search" placeholder="Search" required value={this.state.value} onChange={this.handleChange}/>
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
