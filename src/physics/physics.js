var physics = ()=>{
  this.gravity = (arr,gravity,speed)=>{
    let i = 0;
    let count = arr.length-1;
    console.log(count+":count")
    // console.log(arr[0].type);
    setInterval(function() {
        //render(document.getElementById('canvas')).clear()
        if(arr[i].type == 'player'){arr[i].y+=gravity;}
        // window['_arr_block'].y-=gravity
        if(i>count){i=0;}
        // arr[1].y+=gravity
        // console.log(arr[1].y)
        // console.log(i);
        i+=1;
    },speed)
  }
  return this;
}
