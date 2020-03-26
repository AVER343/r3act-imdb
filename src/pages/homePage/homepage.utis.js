export const fourItemPairs = (Search)=>{
   var newSearch=[]
  var condition=(Search.length/4)
   var i,end=4,j
   for(j=0;j<Math.round( condition + 0.4 );j++)
   {
     var start=end-4
      for(i=0;i<4;i++)
      {   
         newSearch[j] = new Array(...Search.slice(start,end))
      }
      end=end+4;  
   }
   return newSearch
}

export const myFunction=(state,url,fetchingData)=> {
   let {movieName,yearOfRelease,page=1}= state
   if(movieName!=='')
   {
       url=url.concat(`&s=${movieName}`)
   }
   if(yearOfRelease!=='')
   {
       url = url.concat(`&y=${yearOfRelease}`)
   }
   url=url.concat(`&page=${page}`)
     fetchingData(url)
   }
export const myStopFunction=(timeout)=> 
      {
         clearTimeout(timeout);
      }
