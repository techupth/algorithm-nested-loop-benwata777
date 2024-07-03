// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(n) {
  let finalResult = "";

  for (let i = 1; i <= n; i++) {
    let rowResult = "";
    // console.log(i);//1,2,3,4,5
    for (let j = 1; j <= n; j++) {
      rowResult += i * j + "\t";
    }
    finalResult += rowResult + "\n";
  }
  return finalResult;
}
console.log(multiplicationTable(5));
// 1   2   3   4   5
// 2   4   6   8  10
// 3   6   9  12  15
// 4   8  12  16  20
// 5  10  15  20  25
