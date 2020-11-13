// var HI = new HID_IO();
// HI.createControl('a','ф',()=>{alert("23");})


let HI_Key = new HID_IO_keyboard();
function key(en,ru,Construct1){
  HI_Key.createControl_keyboard(en,ru,Construct1);
}

let HI_MOUSE = new HID_IO_MOUSE();
function mouse_d(Construct5){
  HI_MOUSE.create_Control_Mouse_d(Construct5);
}
//может большими всегда писать (выглядит более системно])
//а уже методы будут как в js в начале маленький а потом большой или
//привычно стандартный
//key('a','ф',()=>{console.log('ds')})
