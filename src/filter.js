var firstElementIndex = 0 ;
var emptyListSize = 0 ;
var indexOfNewList = 0 ;

const filterUpperCase = require('./filterUpperCase');

const filter = (list, functionImplementation)=>{
    if(list == undefined || list.length == emptyListSize)
        return list ;
    if(functionImplementation.name == 'filterUpperCase')
        return filterUpperCase(list);
    indexOfNewList = 0 ;
    listAfterApplyingFilter = [] ;
    return applyFilter(list, listAfterApplyingFilter, functionImplementation, firstElementIndex); 
}

const applyFilter = (list, listAfterApplyingFilter, functionImplementation, index)=>{
    if(index == list.length)
        return listAfterApplyingFilter; 
    if(functionImplementation(list[index])){
        listAfterApplyingFilter[indexOfNewList] = list[index] ;
        indexOfNewList += 1 ; 
    }
    return applyFilter(list, listAfterApplyingFilter, functionImplementation, index + 1) ;
}
module.exports = filter ;