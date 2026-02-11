function proses(a,cb){cb(a)}
proses(5,function(x){console.log(x)})
[1,2].map(function(n){return n*2})
setTimeout(() => console.log('OK'),500)
function hitung(a,b,op){return op(a,b)}