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
var badx=[];
var bady=[];
for (var i = 0; i < 2; i++) {
  bad = prompt("bad strawberry");
  strawberries[bad.split(",")[0]][bad.split(",")[1]]=false;
  badx.push(Number(bad.split(",")[0]));
  bady.push(Number(bad.split(",")[1]));
}
var cnt=0;
for (var i = 0; i < vals[2]; i++) {
  for (var j = 0; j < badx.length; j++) {
    if (badx[j]+1 < k-1 && bady[j] < l-1 && badx[j]>=0 && bady[j]>=0){

      strawberries[badx[j]+1][bady[j]] = false;
      badx.push(j+1);
      bady.push(j);
    }
    if (badx[j] < k-1 && bady[j]+1 <l-1 && badx[j]>=0 && bady[j]>=0){
      strawberries[badx[j]][bady[j]+1] = false;
      badx.push(j);
      bady.push(j+1);
    }
    if (badx[j]-1 >= 0 && bady[j] <l-1 && badx[j] < k-1 && bady[j]>=0){
      strawberries[badx[j]-1][bady[j]] = false;
      badx.push(j-1);
      bady.push(j);
    }
    if (badx[j]< k-1 && bady[j]-1 >=0 && badx[j]>=0 && bady[j] <l-1){
      strawberries[badx[j]][bady[j]-1] = false;
      badx.push(j-1);
      bady.push(j);
    }
    badx.splice(j, 1);
    bady.splice(j, 1);
  }
  cnt++;
}
var good=0;
for (var i = 0; i < k; i++) {
  for (var j = 0; j < l; j++) {
    if(strawberries[i][j]) good++;
  }
}
console.log(good);
