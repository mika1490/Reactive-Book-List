import React from 'react';

const BookListAppTitle = ({ title }) => {
  return(
    <h1 className="app-title">
      { title }
    </h1>
  )
}
export default BookListAppTitle;


// import React from 'react';
// class ParentComponent extends React.Component {
//   render() {
//     return (
//       <ChildComponent
//         title="Dope Book List" />
//     )
//   }
// }
// class ChildComponent extends React.Component {
//   render() {
//     return (
//       <h1> {this.props.title} </h1>
//     )
//   }
// }
// export default ParentComponent;