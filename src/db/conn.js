const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shivamkotalia:Shivam1234@tennisdb.rmro6h4.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true, 
    useUnifiedTopology: true,
}).then(()=> {
    console.log("connection succesful");
}).catch((e)=> {
    console.log(e);
})

// mongoose.set('strictQuery', false);

// const connectDB = async () => {

//     try { 
//         const conn = await mongoose.connect(process.env.MONGO_URL); 
//         console.log(`MongoDB Connected: ${conn.connection.host}`);

// } catch (error) {
//     console.log(error);
//     process.exit(1);
// }
// }