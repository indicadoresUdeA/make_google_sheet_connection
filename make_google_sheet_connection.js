function fetchDataFromAPI_New() {
  // URL del nuevo webhook
  var url = "WEBHOOK HERE";
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  
  // Obtener la hoja activa y limpiar el contenido previo
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clear();
  
  // Obtener los encabezados a partir de las claves del primer objeto
  var headers = Object.keys(data[0]);
  sheet.appendRow(headers);
  
  // Recorrer cada objeto y agregar los datos a la hoja
  data.forEach(function(item) {
    var row = [];
    headers.forEach(function(header) {
      // Se agrega el valor si existe o se deja vacío en caso de null
      row.push(item[header] !== null ? item[header] : "");
    });
    sheet.appendRow(row);
  });
}
