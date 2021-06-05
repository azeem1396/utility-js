firstElementIndex = 0 ;
const min = (list)=>{
    if(list == undefined || list.length == 0)
        return undefined ;
    endIndex = list.length - 1 ;
    return findMinInList(list, endIndex);
    
}

const findMinInList = (list, index)=>{
    if(index == firstElementIndex )
        return list[index];
    return Math.min(list[index], findMinInList(list, index-1));
}

module.exports=min