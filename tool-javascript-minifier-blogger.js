function minifyJS() {
    var input = document.getElementById('inputJS').value;
    var output = input.replace(/\s{2,}/g, ' ')
                      .replace(/\/\*[^*]*\*+([^/][^*]*\*+)*\//g, '')
                      .replace(/\/\/.*/g, '')
                      .replace(/\s*([{};:(),=+-])\s*/g, '$1')
                      .replace(/;\}/g, '}');
    document.getElementById('outputJS').value = output;
  }

  function beautifyJS() {
    var input = document.getElementById('inputJS').value;
    var formatted = input.replace(/;/g, ';\n')
                         .replace(/{/g, ' {\n')
                         .replace(/}/g, '\n}\n')
                         .replace(/,/g, ', ')
                         .replace(/\s{2,}/g, ' ')
                         .replace(/\n\s*\n/g, '\n')
                         .trim(); 
    document.getElementById('outputJS').value = formatted;
  }

  function copyOutput() {
    var output = document.getElementById('outputJS');
    output.select();
    output.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Kode berhasil disalin!');
  }

  function clearOutput() {
    document.getElementById('inputJS').value = '';
    document.getElementById('outputJS').value = '';
  }
