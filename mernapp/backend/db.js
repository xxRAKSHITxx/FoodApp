const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const mongoURI = 'mongodb+srv://rakshitmudgal:lu5asqlXJYYQozV8@cluster0.5ahcm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {



        // console.log("connected");
        // const fetched_data = await mongoose.connection.db.collection("food_items");
        const data = fetched_data.find({}, { projection: {} }).toArray();
        // if (err) {
        //     console.log(err);
        // }
        //else {
            console.log(data);
        //}


    }
    )
};
module.exports = mongoDB;