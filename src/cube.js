var power = 3 ;
var firstElementIndex = 0 ;
var emptyListSize = 0 ;

const cube = (list) => {
    if(list == undefined || list.length == emptyListSize )
        return list ;
    return calculateCube(list, firstElementIndex)  ;
}

const calculateCube = (list,index) => {
    if(index == list.length )
        return list;
    list[index] = Math.pow(list[index], power);
    return calculateCube(list,index+1);
}
cube.name="cube"
module.exports = cube ;