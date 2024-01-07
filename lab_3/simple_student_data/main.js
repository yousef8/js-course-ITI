var students = [{
  id: 1,
  name: "Ahmed Hossam",
  phone: "01234567890",
  email: "ahmed@gmail.com",
  dateOfBirth: '2 / 1 / 2000',
  track: 'open source',
  gender: "male",
  hobbies: ['football', "TV Show"],
  address: {
    location: "Cairo",
    Country: "Egypt",
    zipCode: 1220
  }

},
{
  id: 2,
  name: "Omar Sayed",
  phone: "0112345678",
  email: "omar@gmail.com",
  dateOfBirth: '7/11/1998',
  address: 'alex , Egypt',
  track: 'open source',
  gender: "male",
  hobbies: ['football', "TV Show"],
  address: {
    location: "Cairo",
    Country: "Egypt",
    zipCode: 1220
  }
},
{
  id: 3,
  name: "Nouran Tarek",
  phone: "0112345678",
  email: "nour@gmail.com",
  dateOfBirth: '10/6/2001',
  address: 'helwan , Egypt',
  track: 'open source',
  gender: "female",
  hobbies: ['football', "TV Show"],
  address: {
    location: "Cairo",
    Country: "Egypt",
    zipCode: 1220
  }
},

{
  id: 4,
  name: "Seif Osama",
  phone: "0102345678",
  email: "seif@gmail.com",
  dateOfBirth: '11/4/1999',
  address: 'alex , Egypt',
  track: 'open source',
  gender: "male",
  hobbies: ['football', "TV Show"],
  address: {
    location: "Cairo",
    Country: "Egypt",
    zipCode: 1220
  }
},
];

students.forEach(function (student) {
  console.log(`Name: ${student.name}`)
  console.log(`Email ${student.email}`)
  console.log(`Phone ${student.phone}`)
  console.log(`Address: ${student.address.Country}`)
  console.log(`Hobbies: ${student.hobbies}`)
  console.log(`Phone Code ${student.phone.substring(0, 3)}`)
})
