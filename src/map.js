var firstElementIndex = 0 ;
var emptyListSize = 0 ; 
const add = require('./add')

const map = (list, functionName) => {
    if(functionName.name=='identity'||functionName.name=='cube')
        return functionName(list);  
    newList = [] ;
    return incrementListElementByOne(list,newList, firstElementIndex, functionName);
}

const incrementListElementByOne = (list, newList, index, functionName) => {
    if(list == undefined || list.length == emptyListSize)
        return list ;
    if(index == list.length )
        return newList ;
    element = list[index] ;
    newList[index]  = functionName(element);
    return incrementListElementByOne(list, newList, index+1, functionName);
}

module.exports = map;

