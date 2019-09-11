function generateTableHead(table, data) {
      deleteChild(table);
      let thead = table.createTHead();
      let row = thead.insertRow();
      let i = 0;
      do{
          let key = Object.keys(data[i]);
          for (var index = 0; index < key.length; index++) {
            let th = document.createElement("th");
            let tString = key[index].charAt(0).toUpperCase() + key[index].slice(1);
            tString = tString.replace('_', ' ');
            tString = tString.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            })
            let text = document.createTextNode(tString);
            th.appendChild(text);
            row.appendChild(th);
          }
      } while (i > 0);
      generateTable(table, data);
    }
    function generateTable(table, data) {
      for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
        }
      }
    }
    function deleteChild(element) {
      var e = element;
      //e.firstElementChild can be used.
      var child = e.lastElementChild;
      while (child) {
          e.removeChild(child);
          child = e.lastElementChild;
      }
    }
