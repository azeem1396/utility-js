emptyListSize = 0 ;
firstElementIndex = 0 ;
newListIndex = 0 ;
regExp = new RegExp('([a-z])+');
const filterUpperCase = (list)=>{
    if(list == undefined || list.length == emptyListSize)
        return list ;    
    newListIndex = 0 ;
    listAfterApplyingFilter = [] ;
    return filterUpperCaseUsingRecursion(list, listAfterApplyingFilter, firstElementIndex) ;
}

const filterUpperCaseUsingRecursion = (list, listAfterApplyingFilter, index)=>{
    if(index == list.length )
        return listAfterApplyingFilter ;
    if(isUpperCase(list[index])){
        listAfterApplyingFilter[newListIndex] = list[index] ;
        newListIndex += 1 ;
    }
    return filterUpperCaseUsingRecursion(list, listAfterApplyingFilter, index + 1) ;
}

const isUpperCase = (letter) =>{
    anyLowerCasePresent = (regExp).test(letter);
    return !anyLowerCasePresent ;
}

module.exports = filterUpperCase ;