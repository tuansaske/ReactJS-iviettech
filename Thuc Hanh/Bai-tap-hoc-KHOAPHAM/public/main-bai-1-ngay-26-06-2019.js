// var FormDangNhap = React.createClass({ //phai viet hoa chu bien dau
//     render: function(){
//       return(
//         <div>
//         <h1>aaaaaaaaaa</h1>
//         </div>
//         );
//     }
// });


class FormDangNhap extends React.Component { // teen Component phai viet hoa chu dau
  render() {
    return (
      <p>Hello, {this.props.Layten}</p>
    );
  }
}

ReactDOM.render(
<<<<<<< HEAD
  <FormDangNhap />
  ,document.getElementById('root')
);
=======
  <div>
    <FormDangNhap Layten="aaaa"></FormDangNhap>
    <FormDangNhap Layten="BBBB"></FormDangNhap>
  </div>
  , document.getElementById('root')
);


// VÍ DỤ VỀ PROPS
// class FormDangNhap extends React.Component { // teen Component phai viet hoa chu dau
//   render() {
//     return (
//       <p>Hello, {this.props.Layten}</p>
//     );
//   }
// }
//
// ReactDOM.render(
//   <div>
//     <FormDangNhap Layten="aaaa"></FormDangNhap>
//   </div>
//   , document.getElementById('root')
// );
>>>>>>> d9272ed044fdb8ce600f5bc839de3fc2491a7807


// const a = (
//           <div className="wrap-form">
//           <span className="contact100-form-title">
//           Đăng nhập
//           </span>
//             <form>
//
//               <div className="group-input">
//                 <label className="label-input100" >Tên đăng nhập *</label>
//                 <input type="text" className="input100" name="user" placeholder="tuanna" />
//               </div>
//
//               <div className="group-input">
//                 <label className="label-input100" >Mật Khẩu *</label>
//                 <input type="password" className="input100" name="pass" placeholder="******" />
//               </div>
//
//               <div className="container-contact100-form-btn">
//                 <button className="contact100-form-btn">
//                   <span>
//                   Submit
//                   <i className="zmdi zmdi-arrow-right m-l-8"></i>
//                   </span>
//                 </button>
//               </div>
//
//             </form>
//           </div>
//           );
//     // change code below this line
// ReactDOM.render(a, document.getElementById('root'));


// ReactDOM.render(
//   <h1> Hello world!</h1>, //para 1 "truyen gi can"
//   document.getElementById('root') // chỉ định đối tượng để ghi ra
// );
