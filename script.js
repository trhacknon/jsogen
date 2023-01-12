function encode(source) {
  var str = source;

  var length = str.length;
  var encodedStr = str.charCodeAt(0);
  var position = 1;
    
  while(position<length) {
        var n = str.charCodeAt(position++);
        encodedStr = encodedStr + ", " + n;
        console.log(n);
  }

  document.getElementById("encoded_output").innerHTML = encodedStr;
}

function decode(source) {
  //console.log(typeof source) // Debug: Proof that source is a string.
  var source_array = source.split(','); // Convert string (CSV) to array.
  var decodedStr = String.fromCharCode.apply(null, source_array);
  document.getElementById("decoded_output").innerHTML = decodedStr;
}
