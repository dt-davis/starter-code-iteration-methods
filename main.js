// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.
function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

let greenEyes = users.filter(user => user.eyeColor === 'green')

printKata(0, greenEyes)

let activeUsers = users.filter(users => users.isActive === true)

printKata(1,activeUsers)

let userEmail = users.map(users => users.email)

printKata(2,userEmail)

let companyCheck = users.some(users => users.company === 'OVATION')

printKata(3,companyCheck)

let ageCheck = users.find(users => users.age > 38)

printKata(4,ageCheck)

let kata5 = users.filter(users => users.isActive === true).find(users => users.age === 38)

printKata(5,kata5)

let kata6 = users.filter(users => users.company === "ZENCO").map(users => users.balance)

printKata(6, kata6)

let kata7 = users.filter(users => users.tags.includes('fugiat')).map(users => users.age)

printKata(7,kata7)