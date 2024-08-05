import {createServer} from 'http';

const app=createServer((req,res)=>{
    
    res.write("vinod");
    res.end();
    
    
});

app.listen(8000,()=>{
    console.log("listning");  
})