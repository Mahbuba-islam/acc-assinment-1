

let count = 0;
const viewCount = (req,res,next)=>{
    count++
    console.log(count)
    
}

module.exports=viewCount
