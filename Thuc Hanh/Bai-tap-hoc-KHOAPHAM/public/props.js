// VÍ DỤ VỀ PROPS
class FormDangNhap extends React.Component { // tên Component phai viet hoa chu dau
  render() {
    return (
      <p>Hello, {this.props.Layten}, {this.props.showConsole}</p>
    );
  }
}

function sayHello() {
  console.log("Hello !");
} //Có thể thao function và gọi function trong PROPS

let a =  document.getElementById('root');

ReactDOM.render(
  <div>

    <FormDangNhap Layten="ok 1"></FormDangNhap>
    <FormDangNhap Layten="ok 2" showConsole={sayHello()}></FormDangNhap>
  </div>
  ,a
);
