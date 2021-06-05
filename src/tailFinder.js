const tail = (list) => {
    if( list==undefined || list.length==0){
        return list ; 
    }
    tailElementList = [] ;
    index = list.length-1 ; //to traverse from back size.
    addTailElementRecursively(list,tailElementList,index);
    return tailElementList;   
}

const addTailElementRecursively = (list, tailElementList, index)=>{
    if(index == 0)
        return ;
     tailElementList[index-1] = list[index] ;
     addTailElementRecursively(list,tailElementList,index-1);
}

module.exports = tail;
 