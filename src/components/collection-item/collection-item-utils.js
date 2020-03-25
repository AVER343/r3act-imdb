const isExisting= (array,itemToFind)=>{
    var isExisting=false
    let arrayLength=array.length
    let i
    for(i=0;i<arrayLength;i++)
    {
        if(array[i].imdbID===itemToFind.imdbID)
        {
            isExisting=true
        }
    }
    return isExisting
}
export default isExisting