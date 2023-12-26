function run() {
    var html = document.getElementById("input");
    
    var code = document.getElementById("output").contentWindow.document;
  
    document.body.onclick = function() {
      code.open();
      code.writeln(
        html.value +
          "<style>" 
      );
      code.close();
    };
  }
  
  compile();