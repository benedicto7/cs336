const addDataRows = () => {
  const object = new DataService();

  const data = object.getData();

  // Converts object to a string
  // alert(JSON.stringify(data));

  // Repeatedly call on each data object
  data.forEach((item, index) => createRow(item, index));
}

const createRow = (parentElem, rowData) => {
  const rows = document.getElementById('rows');

  // Inserts at the bottom
  const row = rows.insertRow(rowData);

  // The cells across
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);

  // Change the text according to the value
  cell1.innerHTML = rowData + " " + parentElem.name;
  cell2.innerHTML = rowData + " " + parentElem.gender;
  cell3.innerHTML = rowData + " " + parentElem.address;
  cell4.innerHTML = rowData + " " + parentElem.age;
  cell5.innerHTML = rowData + " " + parentElem.phoneNumber;
  cell6.innerHTML = rowData + " " + parentElem.picture;
}
