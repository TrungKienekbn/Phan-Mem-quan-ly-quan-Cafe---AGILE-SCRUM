do {
    var a = prompt("Nhập a:");
    var b = prompt("Nhập b:");

    a = parseFloat(a);
    b = parseFloat(b);

    var o = prompt("Toán tử + - x :");

    toanTu();

    
    var kiemTra = confirm("Bạn có muốn nhập tiếp")
} while (kiemTra == true);

function toanTu(){
    switch (o) {
        case "+":
            var kq = a + b;
            alert("kết quả = " + kq);
            break;

        case "-":
            var kq = a - b;
            alert("kết quả = " + kq);
            break;

        case "x":
            var kq = a * b;
            alert("kết quả = " + kq);
            break;

        case ":":
            var kq = a / b;
            alert("kết quả = " + kq);
            break;

        default:
            break;
    }
}
