// var HI = new HID_IO();
// HI.createControl('a','ф',()=>{alert("23");})


let HI = new HID_IO();
function key(en,ru,Construct1){
  HI.createControl(en,ru,Construct1)
}

//key('a','ф',()=>{console.log('ds')})
