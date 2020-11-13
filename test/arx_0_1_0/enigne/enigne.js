function add_file (file){
  var script = document.createElement('script');
  script.src=file;
  document.getElementsByTagName('head')[0].appendChild(script);
}

add_file('enigne/io_keyboard.js');
add_file('enigne/io_mouse.js')
add_file('enigne/game_specific_interface.js');
add_file('enigne/render.js');
add_file('enigne/physics.js');
add_file('enigne/collision.js')
add_file('enigne/system.js');
