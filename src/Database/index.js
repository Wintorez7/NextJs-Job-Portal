const { default: mongoose } = require("mongoose");

 
const connectToDb = async() => {
    const connectionURL = process.env.MONGODB_URI;
    mongoose.connect(connectionURL)
         .then(() => console.log('Database Connection Successfull'))
         .catch((e) => console.log(e))
}

export default connectToDb;