// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import '../../App.css'
// class SlotsItem extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "Book",
//       name: "",
//     };
//   }

//   getStyle = () => {
//     return {
//       background: this.props.slot.booked ? "Red" : "Green",
//     };
//   };
//   onChange = (n) => this.setState({ name: n });
//   getName = () => {
//     const n = prompt("ENTER VEHICLE  LICENSE PLATE");
//     this.onChange(n);
//     this.props.updateName.bind(this, this.props.slot.id);
//   };

//   changeText = () => {
//     if (!this.props.slot.booked) {
//       this.setState({ title: "Booked" });
//       this.getName();
//     } else {
//       this.setState({ title: "Book" });
//     }
//   };

//   render() {
//     // const { } = this.props.slot
//     return (
//       <>
//         <div className="Slots">
//           <div className="Slot-head">Parking Slot</div>
//           <div className="Line"></div>
//           <button
//             label
//             style={this.getStyle()}
//             id="Book-slot"
//             className="bookbtn"
//             onClick={this.changeText}
//           >
//             <input
//               type="checkbox"
//               className="Chkbx"
//               onChange={this.props.markBooked.bind(this, this.props.slot.id)}
//             />
//             {this.state.title}
//           </button>
//           {this.state.name}
//         </div>
//       </>
//     );
//   }
// }

// SlotsItem.propTypes = {
//   slot: PropTypes.object.isRequired,
// };

// export default SlotsItem;