import mongoose  from "mongoose";


const connectToDb = async () =>{
    try {
        const {connection} = await mongoose.connect(
            process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/finderby' 
        );

        if(connection){
            console.log(`Database Connected successfully:${connection.host}`);
        }
    } catch (e) {
        console.log(e);
        process.exit(1)
    }
}

export default connectToDb;