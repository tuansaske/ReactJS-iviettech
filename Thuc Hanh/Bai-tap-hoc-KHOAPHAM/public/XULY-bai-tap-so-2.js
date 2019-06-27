class ContainerWrap extends React.Component{
  render(){
    return(
      <div className="ContainerWrap">
        <Header/>
        <PageContent/>
        <Footer/>
      </div>
    )
  }
}

function Logo(props) {
  return (
    <a className="navbar-brand" href={props.logo.linkUrlclick} alt={props.logo.name}>
      <img className="logo" src={props.logo.logoUrl} /> Tuanna
    </a>
  );
} // khởi tạo đối tượng LOGO, TRUYỀN PROPS CHO NÓ

const logo = {
  dulieulogo: {
    name: 'Logo Website',
    logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
    linkUrlclick:"#"
  },
}; // truyền PROPS

function ButtomForMobile(){
  return(
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
  )
} // Câu hỏi: Đây có phải là 1 cách khởi tạo Component không? Không cần truyền biến

function MenuTop(a){
  return(
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">{a.DuLieuMenu.trangchu}
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{a.DuLieuMenu.gioithieu}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{a.DuLieuMenu.dichvu}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{a.DuLieuMenu.lienhe}</a>
        </li>
      </ul>
    </div>
  )
}  // Câu hỏi: Đây có phải là 1 cách khởi tạo Component không? Có truyền bến props = a

const DuLieuMenuTop = {
  DuLieuMenuTop: {
    trangchu: 'Trang chủ',
    gioithieu: 'Giới thiệu',
    dichvu:"Dịch vụ",
    lienhe:"Liên hệ"
  },
}; // truyền PROPS thông qua JSON

class Header extends React.Component{
  render(){
    return (
      /* Navigation */
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Logo logo={logo.dulieulogo} />
        <ButtomForMobile/>
        <MenuTop DuLieuMenu={DuLieuMenuTop.DuLieuMenuTop}/>
      </div>
    </nav>
    /* Page Content */
    );
  }
}

// function MenuLeft(){
//   return(
//     <div className="col-lg-3">
//       <h1 className="my-4">Danh mục</h1>
//       <div className="list-group">
//         <a href="#" className="list-group-item">Loại 1</a>
//       <a href="#" className="list-group-item">Loại 2</a>
//     <a href="#" className="list-group-item">Loại 3</a>
//       </div>
//     </div>
//   )
// }

const DuLieuMenuLeft = {
  DuLieuMenuLeft: {
    menu1: 'Laptop',
    menu2: 'Điện thoại',
    menu3:"Máy tính bàn",
    menu4:"Linh kiện máy tính"
  },
}; // truyền PROPS thông qua JSON

class MenuLeft extends React.Component{
  render(){
    return(
      <div className="col-lg-3">
        <h1 className="my-4">Danh mục</h1>
        <div className="list-group">
          <a href="#" className="list-group-item">{this.props.MenuLeft1}</a>
          <a href="#" className="list-group-item">{this.props.MenuLeft2}</a>
          <a href="#" className="list-group-item">{this.props.MenuLeft3}</a>
          <a href="#" className="list-group-item">{this.props.MenuLeft4}</a>
        </div>
      </div>
    )
  }
}

class Banner extends React.Component{
  render(){
    return(
      <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="" />
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="" />
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

function ImageItem(props){
  return(
    <img className="card-img-top" src={props.anh.srcImageItem1} alt={props.anh.nameImageItem1} />
  )
}

const danhsachImageItem = {
  ImageItem1: {
    srcImageItem1:"http://placehold.it/700x400/0000FF?Text=anh-1",
    nameImageItem1:"Ảnh số 1"
  },
  ImageItem2:{
    srcImageItem2:"http://placehold.it/700x400/000000?Text=anh-2",
    nameImageItem1:"Ảnh số 2"
  },
  ImageItem3:{
    srcImageItem3:"http://placehold.it/700x400/0000FF?Text=anh-3",
    nameImageItem1:"Ảnh số 3"
  },
  ImageItem4:{
    srcImageItem4:"http://placehold.it/700x400/000000?Text=anh-4",
    nameImageItem1:"Ảnh số 4"
  }
}

function MotaItem(props){
  return(
    <p className="card-text">{props.Mota.Mota}</p>
  );
}

const DulieuMotaItem = {
  DulieuMotaItem: {
    Mota:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
  }
}

function Item(props){
  return(
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <a href="#">
          <ImageItem anh={danhsachImageItem.ImageItem1}/>
        </a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{props.item.tenItem}</a>
          </h4>
          <h5>{props.item.GiaItem} đ</h5>
        {/* <MotaItem Mota={DulieuMotaItem.DulieuMotaItem}/> */}
          <div className="card-text">{props.item.MotaItem}</div>
        </div>
        <div className="card-footer">
          <small className="text-muted">{props.item.ratingItem}</small>
        </div>
      </div>
    </div>
  )
}

const dulieuItem ={
  dulieuItem1:{
    tenItem:"LAPTOP ACER SWIFT 5 SF514 53T 740R",
    GiaItem:"27990000",
    MotaItem:"CPU: Intel Core i7 8565U<br>RAM: 8GB DDR4<br>HDD: 256GB SSD PCIe<br>VGA: Intel UHD Graphics 620<br>Màn hình: 14 FHD<br>OS Windows 10 SL",
    ratingItem:"★ ★ ★ ★ ☆"
  },
  dulieuItem2:{
    tenItem:"Bộ vi xử lý CPU Intel Core i3-9100F (3.6Ghz, 6M Cache, up to 4.20 GHz)",
    GiaItem:"2900000",
    "MotaItem":"<p>Intel Core i3-8100</p>\r\n<p>Nh&acirc;n CPU: 4/Luồng CPU: 4</p>\r\n<p>Bộ nhớ đệm: 6MB, L3 cache</p>\r\n<p>Kh&ocirc;ng t&iacute;ch hợp đồ hoạ</p>\r\n<p>C&ocirc;ng nghệ: 14nm</p>\r\n<p>Điện &aacute;p ti&ecirc;u thụ tối đa: 65W</p>",
    ratingItem:"★ ★ ★ ★ ★"
  }
} //kiểu viết const trong ES6. BIẾN KHÔNG THAY ĐỔI GIÁ TRỊ. bên trong là JSON

class Items extends React.Component{
  render(){
    return(
      <div className="row">
        <Item item={dulieuItem.dulieuItem1}/>
        <Item item={dulieuItem.dulieuItem2}/>
      </div>
    )
  }
}

class PageContent extends React.Component{
  render(){
    return(
      /* Page Content */
      <div className="container">
        <div className="row">
          <MenuLeft MenuLeft1="laptop" MenuLeft2="Điện thoại" MenuLeft3="Máy tính để bàn" MenuLeft4="Linh kiện máy tính"/>
          {/* /.col-lg-3 */}
          <div className="col-lg-9">
            <Banner/>
              <Items/>
              {/* <Items/>
              <Items/>
              <Items/> */}
            {/* /.row */}
          </div>
          {/* /.col-lg-9 */}
        </div>
        {/* /.row */}
      </div>
      /* /.container */
  );
  }
}



class Footer extends React.Component{
  render(){
    return(
      /* Footer */
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright © Your Website 2019</p>
        </div>
        {/* /.container */}
      </footer>
    )
  }
}



ReactDOM.render(
  <ContainerWrap/>
  , document.getElementById("root")

);
