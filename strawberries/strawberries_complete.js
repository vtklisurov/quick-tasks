var input = prompt("k,l,r");
var vals = input.split(",");
var k= vals[0];
var l= vals[1];
var r= vals[2];
var strawberries=[]
for (var i = 0; i < vals[0]; i++) {
  strawberries[i]=[];
  for (var j = 0; j < vals[1]; j++) {
    strawberries[i].push(true);
  }
}

var bad;
for (var i = 0; i < 2; i++) {
  bad = prompt("bad strawberry");
  strawberries[bad.split(",")[0]-1][bad.split(",")[1]-1]=false;

}

var tmp = [];
for (var p = 0; p < r; p++) {
  for (var i = 0; i < strawberries.length; i++)
    tmp[i] = strawberries[i].slice();
  //tmp = strawberries.slice(0);
  for (var i = 0; i < k; i++) {
    for (var j = 0; j < l; j++) {
      if(!strawberries[i][j]){
        if(i+1<k) tmp[i+1][j]=false;
        if(j+1<l) tmp[i][j+1]=false;
        if(i-1>-1) tmp[i-1][j]=false;
        if(j-1>-1) tmp[i][j-1]=false;
      }
    }
  }
  for (var i = 0; i < tmp.length; i++)
    strawberries[i] = tmp[i].slice();
  //strawberries = tmp.slice(0);
}

var good=0;
for (var i = 0; i < k; i++) {
  for (var j = 0; j < l; j++) {
    if(strawberries[i][j]) good++;
  }
}
console.log(good);
