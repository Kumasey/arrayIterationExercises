// var users = [
//     {
//       username: 'larry',
//       email: 'larry@foo.com',
//       yearsExperience: 22.1,
//       favoriteLanguages: ['Perl', 'Java', 'C++'],
//       favoriteEditor: 'Vim',
//       hobbies: ['Fishing', 'Sailing', 'Hiking'],
//       hometown: {
//         city: 'San Francisco',
//         state: 'CA'
//       }
//     },
//     {
//       username: 'jane',
//       email: 'jane@test.com',
//       yearsExperience: 33.9,
//       favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
//       favoriteEditor: 'Emacs',
//       hobbies: ['Swimming', 'Biking', 'Hiking'],
//       hometown: {
//         city: 'New York',
//         state: 'NY'
//       }
//     },
//     {
//       username: 'sam',
//       email: 'sam@test.com',
//       yearsExperience: 8.2,
//       favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
//       favoriteEditor: 'Atom',
//       hobbies: ['Golf', 'Cooking', 'Archery'],
//       hometown: {
//         city: 'Fargo',
//         state: 'SD'
//       }
//     },
//     {
//       username: 'anne',
//       email: 'anne@test.com',
//       yearsExperience: 4,
//       favoriteLanguages: ['C#', 'C++', 'F#'],
//       favoriteEditor: 'Visual Studio Code',
//       hobbies: ['Tennis', 'Biking', 'Archery'],
//       hometown: {
//         city: 'Albany',
//         state: 'NY'
//       }
//     },
//     {
//       username: 'david',
//       email: 'david@test.com',
//       yearsExperience: 12.5,
//       favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
//       favoriteEditor: 'VS Code',
//       hobbies: ['Volunteering', 'Biking', 'Coding'],
//       hometown: {
//         city: 'Los Angeles',
//         state: 'CA'
//       }
//     }
//   ];


//                                              SOLUTIONS

//                                                PART ONE
//                                (1)

function printEmails(){
    var email = users.forEach(function(val){
       console.log(val.email);
       });
   console.log(email)
   }

//                                (2)

function printHobbies(){
    var hobbies = users.forEach(val => {
    val.hobbies.forEach(value => {
        console.log(value)
    })

})
console.log(hobbies)
}

//                                  (3)

function findHometownBystate(s){
    return users.find(function(val){
    return val["hometown"].state === s})};

findHometownByState('CA')

//                                  (4)

function allLanguages(){
    var arr = [];
    var newArr = []
    users.map(val => {
    arr.push(val["favoriteLanguages"])
})
    return newArr = arr.flat(5);
}
allLanguages()

//                                  (5)

function hasFavoriteEditor(value){
    return users.some(val => {
   return val["favoriteEditor"] === value
})

}
hasFavoriteEditor('Atom')

//                                  (6)

function findByUsername(name){
    return users.filter(val => {
    return val["username"] === name
})
}
findByUsername('david')

//                                          PART TWO

//                                          (1)

function vowelCount(string){
    var stringArr = string.toLowerCase().split('');
    var obj = {};
    stringArr.forEach(function(val) {
      if ('aeiou'.indexOf(val) !== -1) {
        obj[val] = (obj[val] || 0 ) + 1;
              }
        })
    return obj;
  }
vowelCount('incredible')

//                                          (2)

function removeVowels(string){
    var arr = [];
    var hum = string.split("");
    hum.map(val => {
    if(val != "a" &&  val != "e" && val != "i" && val != "o" && val != "u" ){
    arr.push(val)
          }
      })
    return arr
  }
  removeVowels('fun')