/**BÀI TẬP 1: XUẤT 3 SỐ NGUYÊN THEO THỨ TỰ TĂNG DẦN
 * 
 */


function sapXepTangDan(a,b,c){
var a = document.getElementById("soN1").value ;
var b = document.getElementById("soN2").value ;
var c = document.getElementById("soN3").value ;

if (a > b) {
    var num = a;
    a = b;
    b = num;
  }
  if (a > c) {
    var num = a;
    a = c;
    c = num;
  }
  if (b > c) {
    var num = b;
    b = c;
    c = num;
  }

console.log(a,b,c);
};

/**BÀI TẬP 2: VIẾT CHƯƠNG TRÌNH CHÀO HỎI CÁC THÀNH VIÊN TRONG GIA ĐÌNH
 * 
 */
function dangNhap(){
    var nguoiSD = document.getElementById("nguoiSuDung").value;
switch (nguoiSD){
    case "Bố" :
        console.log("Xin Chào Bố");
        break;
    case "Mẹ":
            console.log("Xin Chào Mẹ");
            break;
    case "Anh Trai" :
        console.log("Xin Chào Anh Trai");
        break;
    case "Em Gái" :
        console.log("Xin Chào Em Gái");
        break;  
 default :
console.log("Xin chọn người sử dụng");
}

}


/**BÀI TẬP 3: VIẾT CHƯƠNG TRÌNH ĐẾM CÓ BAO NHIÊU SỐ LẺ VÀ BAO NHIÊU SỐ CHẴN
 * 
 */
function chanLe(){
    var soN1 = document.getElementById("soNguyen1").value*1;
    var soN2 = document.getElementById("soNguyen2").value*1;
    var soN3 = document.getElementById("soNguyen3").value*1;
    console.log(soN1,soN2,soN3);
    var soNguyenChan = 0;
    var soNguyenLe = 0;
    if (soN1 % 2 === 0){
        soNguyenChan++;
    }else {
        soNguyenLe++;
    }
    if (soN2 % 2 === 0){
        soNguyenChan++;
    } else {
        soNguyenLe++;
    }
    if (soN3 % 2 === 0){
        soNguyenChan++;
    } else {
        soNguyenLe++;
    }
    console.log("số số nguyễn chẵn là " + soNguyenChan);
    console.log("số số nguyên lẻ là " + soNguyenLe);
}
/**BÀI TẬP 4: VIẾT CHƯƠNG TRÌNH CHO BIẾT TAM GIÁC KHI NHẬP SỐ LIÊU 3 CẠNH
 * 
 */
function xacDinhTamGiac (x,y,z){
    var x = document.getElementById("canhX").value*1;
    var y = document.getElementById("canhY").value*1;
    var z = document.getElementById("canhZ").value*1;
    console.log(x,y,z);
    if (x == y && y == z) {
        console.log("Đây là tam giác đều");
    } else if ((x == y && x != z) || (x == z && x != y) || (y == z && y != x)){
console.log("Đây là tam giác cân")
    } 
    else if ((x*x + y*y == z*z)|| (x*x + z*z == y*y)|| (y*y + z*z == x*x)){
console.log("Đây là tam giác vuông")
    } else {
        console.log("Đây là tam giác thông thường");
    }
}