const addDataRows = async () => {
  const object = new DataService();
  const fetch = await object.fetchData();
  const result = object.getData();

  // Converts object to a string
  // alert(JSON.stringify(result));

  // Repeatedly call on each data object
  result.forEach((item, index) => {createRow(item, index)});
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

  // Insert name
  cell1.innerHTML = parentElem.name.title + " " + parentElem.name.first + " " + parentElem.name.last;

  // Insert gender
  cell2.innerHTML = parentElem.gender;

  // Insert address
  cell3.innerHTML = parentElem.location.street.number + " " +
                    parentElem.location.street.name + ", " +
                    parentElem.location.city + ", " +
                    parentElem.location.postcode + ", " +
                    parentElem.location.state + ", " +
                    parentElem.location.country;

  // Insert age
  cell4.innerHTML = parentElem.dob.age;

  // Insert phone number
  cell5.innerHTML = parentElem.phone;

  // Create image element and picture
  const image = document.createElement("img");
  image.src = parentElem.picture.medium;

  // Insert image
  cell6.appendChild(image);
}
