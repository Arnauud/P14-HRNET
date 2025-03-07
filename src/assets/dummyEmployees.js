export const dummyEmployees = [
    { firstName: "John", lastName: "Doe", dateOfBirth: "1990-05-12", startDate: "2020-01-15", department: "Engineering", street: "123 Main St", city: "New York", state: "NY", zipCode: "10001" },
    { firstName: "Jane", lastName: "Smith", dateOfBirth: "1985-09-25", startDate: "2019-03-22", department: "Marketing", street: "456 Elm St", city: "San Francisco", state: "CA", zipCode: "94105" },
    { firstName: "Alice", lastName: "Johnson", dateOfBirth: "1993-07-18", startDate: "2021-06-10", department: "Human Resources", street: "789 Oak St", city: "Chicago", state: "IL", zipCode: "60610" },
    { firstName: "Emily", lastName: "Davis", dateOfBirth: "1992-04-15", startDate: "2022-09-30", department: "Legal", street: "14 Baker St", city: "Boston", state: "MA", zipCode: "02108" },
    { firstName: "Tom", lastName: "Hanks", dateOfBirth: "1980-06-20", startDate: "2018-07-12", department: "Finance", street: "555 Broadway", city: "Los Angeles", state: "CA", zipCode: "90012" },
    
    ...Array.from({ length: 55 }, (_, i) => ({
      firstName: `Employee${i + 6}`,
      lastName: `Last${i + 6}`,
      dateOfBirth: `198${Math.floor(Math.random() * 9)}-0${Math.floor(Math.random() * 9) + 1}-1${Math.floor(Math.random() * 9)}`,
      startDate: `20${Math.floor(Math.random() * 5) + 18}-0${Math.floor(Math.random() * 9) + 1}-1${Math.floor(Math.random() * 9)}`,
      department: ["Engineering", "Marketing", "HR", "Finance", "Legal"][Math.floor(Math.random() * 5)],
      street: `${Math.floor(Math.random() * 9999)} Random St`,
      city: ["New York", "San Francisco", "Chicago", "Boston", "Los Angeles"][Math.floor(Math.random() * 5)],
      state: ["NY", "CA", "IL", "MA", "TX"][Math.floor(Math.random() * 5)],
      zipCode: `${Math.floor(Math.random() * 89999) + 10000}`
    }))
  ];
  