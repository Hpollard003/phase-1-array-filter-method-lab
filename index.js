// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, match) {
    let filteredArray = array.filter(name => name.toLowerCase() === match.toLowerCase())
    return filteredArray
}
//const names = drivers.filter(findMatching)

function fuzzyMatch(arr,string){
    const newArray = arr.filter(function(element){
        return element.charAt(0) === string.charAt(0);
    });
    return newArray;
}

function matchName(drivers, names ) {
    let home = drivers.filter(place => place.name === names)
    return home

}
