console.log(`-------------------`);
console.log(`- Map for Arrays`);
console.log(`- - - - - - - - - -`);


let someNumbers = [1, 4, 7, 8, 9]

let newNumbers = someNumbers.map(item => {
    return item * item
})

console.log(`-`, newNumbers);

console.log(`-------------------`);


console.log(`- Map for Objects`);
console.log(`- - - - - - - - - -`);

let objArray = [
    {key: 1, value: 12, name: 'reid'},
    {key: 2, value: 52, name: 'liv'},
    {key: 3, value: 28, name: 'el'},
    {key: 4, value: 12, name: 'bail'}
]



let newObjArray = objArray.map(item => {
    let temp = {}

    temp['key'] = item.key 
    temp['value'] = item.value 
    temp['name'] = item.name 
    temp['url'] = 'www.pretendURL/' + item.name  

    return temp
})

console.log('newObjArray')
console.log(newObjArray)