const { default: mongoose } = require("mongoose");


const connectToDb = async() => {
    const connectionURL = "mongodb+srv://mohanKumhar:MK2025@cluster0.zlg15hi.mongodb.net/";
    mongoose.connect(connectionURL)
         .then(() => console.log('Database Connection Successfull'))
         .catch((e) => console.log(e))
}

export default connectToDb;