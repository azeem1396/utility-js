
firstElementIndex = 0 ;
initialSum = 0 ;
emptyListSize = 0 ;
emptyString = '' ;

reduce = (list, ...args) => {
    if(list == undefined)
        return undefined ;
    if(list.length == emptyListSize){
        if(args[1] == undefined)
            return undefined ;
        else
            return args[1] ;
    }
    functionImplementation = args[0] ;
    if(typeof list[firstElementIndex] == 'number'){
        sum = initialSum ;
        sum = addNumbersPresentInTheList(list, firstElementIndex, sum, functionImplementation);
        return args[1] != undefined ? functionImplementation(args[1], sum) : sum ;
    }else{
        string = emptyString;
        string = concatenateElementsPresentInTheList(list, firstElementIndex, string, functionImplementation) ;
        return args[1] != undefined ? functionImplementation(args[1], string) : string ;
    }
}

const addNumbersPresentInTheList = (list, index, sum, functionImplementation) => {
    if(index == list.length)
        return sum ;
    sum = functionImplementation(sum, list[index]) ;
    return addNumbersPresentInTheList(list, index+1, sum, functionImplementation);
}


const concatenateElementsPresentInTheList = (list, index, string, functionImplementation) => {
    if(index == list.length)
        return string ;
    string = functionImplementation(string, list[index]) ;
    return concatenateElementsPresentInTheList(list, index+1, string, functionImplementation);
}

module.exports = reduce ;