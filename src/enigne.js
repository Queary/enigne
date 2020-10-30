function add_file (file){
  var script = document.createElement('script');
  script.src=file;
  document.getElementsByTagName('head')[0].appendChild(script);
}

add_file('src/core/init.js');
