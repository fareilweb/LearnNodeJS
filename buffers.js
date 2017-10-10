
//var buf = new Buffer(10);
//var buf = new Buffer([10, 20, 30, 40, 50]);
var buf = new Buffer("Simply Easy Learning", "utf-8");

var json = buf.toJSON();

console.log(json);