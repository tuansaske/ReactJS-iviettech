var express = require("express");
var  app = express();

app.use(express.static("public"));
// cau hình EJS
app.set("view engine", "ejs"); // phần này có thể thay gói sử dụng, ví dụ như .jsx
app.set("views","./views");

// port 3000 server
app.listen(3000);

app.get("/", function(req, res){ //res là khách hàng cần tải về cái gì, xem cái gì
  // req là khách hàng tải lên cái gì, muốn gửi cái gì
  res.render("trangchu");
}); // đày là 1 Route trong node, chạy trang chủ


// EJS và cấu hình chạy server trên NODE js

//chay server: node index.js

// học EJS: https://www.youtube.com/watch?v=6V2YEp_dPI0&list=PLzrVYRai0riRcHcnBzMSqLIVodfHo9YGU&index=11
