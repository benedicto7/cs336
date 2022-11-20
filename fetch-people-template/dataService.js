class DataService {
  constructor() {
    // In the object, everything is a string except for age
    this.data = [
      {
        name: "Ben",
        gender: "male",
        address: "Gamma 3",
        age: 20,
        phoneNumber: "616"
      },
      {
        name:  "elpidius",
        gender: "female",
        address: "gamma 1",
        age: 19,
        phoneNumber: "08"
      },
      {
        name: "krisno",
        gender: "female",
        address: "gamma 1",
        age: 19,
        phoneNumber: "08"
      }
    ];
  }

  getData(numRecords) {
    // If numRecords is 0 or below = no parameter, return whole data array
    const result = (numRecords > 0) ? this.data.slice(0, numRecords) : this.data;

    return result;
  }
}

// Test code
// const test = new DataService("Ben", "male", "Gamma 3", 20, "616", "elpidius", "female", "gamma 1", 19, "08", "krisno", "female", "gamma 1", 19, "08");
// console.log(test.data[1].name);
// console.log(test.getData(2));
// console.log(test.getData());

// const test2 = new DataService();
// console.log(test2.getData());

// module.export = DataService;