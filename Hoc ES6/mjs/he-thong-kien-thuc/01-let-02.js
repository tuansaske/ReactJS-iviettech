function DrawShape(){

var mContent = document.getElementById("mContent");
mContent.innerHTML ="";

  for(let i = 1; i<=10; i++){ // vong lap voi bien i, i <= 10, tang i len den khi < 10
    var elmP = document.createElement("p"); // tao moi doi tuong P
    elmP.innerHTML =i; // gan so 1,2,3 vao P vua tao

    elmP.onclick = function(){
      alert("Bạn đang chọn: #" + i); // khai bao tu khoa LET sẽ chọn dung giá trị của i ++
    }

    mContent.appendChild(elmP); // chay vong lap va gan vao doi tuong mContent
  }
}


function clearShape(){
  var mContent = document.getElementById("mContent"); // chọn đối tượng có ID mContent
  mContent.innerHTML =""; // xóa tất cả nội dung bên trong
}
