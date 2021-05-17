function isUnique(arr){
    return new Set(arr).size==arr.length;
}

    var arr=[2,4,6,5,4];
    if(isUnique(arr)){
        console.log("no duplicate found")
    }
    else
    {
        console.log("duplicates found")
    }
    
    