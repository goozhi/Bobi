var str = 'Hello World';
var hashCode = 0;
for (var i = 0; i < str.length; i++) {
  var char = str.charCodeAt(i);
  hashCode = ((hashCode << 5) - hashCode) + char;
  hashCode = hashCode & hashCode; // Convert to 32bit integer
}
console.log(hashCode);
