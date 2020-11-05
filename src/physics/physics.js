var physics = ()=>{
  this.gravity = (arr,gravity)=>{
    let i = 0;
    let count = arr.length-1;
    //console.log(arr[0].w+":TYPE");
    if(arr[0].type == 'player' && i<count){arr[0].y+=gravity;}
  }
  return this;
}
