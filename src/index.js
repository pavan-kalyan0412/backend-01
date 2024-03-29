import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log("server running at port 8000")
    } )
})
.catch((err) =>{
    console.log("Mongodb connection failed!!", err)
})