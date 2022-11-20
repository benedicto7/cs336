// import fetch from 'node-fetch';

class DataService {
  constructor() {
    // In the object, everything is a string except for age
    this.data = [];
  }

  async fetchData() {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();

      if (!response.ok) {
        console.log("Looks like there was a problem. Satus Code: " + response.status);
        return;
      }

      // Outputs result
      console.log(JSON.stringify(data, undefined, 2));

      // Store data fetched into array
      data.results.forEach((item, index) => {
        this.data[index] = item;
      });

      // Checks if it stores properly
      console.log(this.data);
    }

    catch (err) {
      console.log("Fetch Error :-S", err)
    }
  }

  // fetchData() { // async
  //   fetch('https://randomuser.me/api/?results=10')
  //   .then((response) => {
  //     if (! response.ok) {
  //       console.log('Looks like there was a problem. Status Code: ' +
  //       response.status);
  //       return;
  //     }

  //     response.json().then((data) => {
  //       console.log(JSON.stringify(data, undefined, 2));
  //     });
  //   })

  //   .catch(function (err) {
  //     console.log('Fetch Error :-S', err);
  //   });
  // }

  getData(numRecords) {
    // If numRecords is 0 or below = no parameter, return whole data array
    const result = (numRecords > 0) ? this.data.slice(0, numRecords) : this.data;

    return result;
  }
}

// Test code getData()
/* const test = new DataService("Ben", "male", "Gamma 3", 20, "616", "elpidius", "female", "gamma 1", 19, "08", "krisno", "female", "gamma 1", 19, "08");
console.log(test.data[1].name);
console.log(test.getData(2));
console.log(test.getData());
const test2 = new DataService();
console.log(test2.getData());
*/

// Test code fetchData()
/*
const test = new DataService();
test.fetchData();
console.log(test.getData());
 */