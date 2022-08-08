const mongoose = require ('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect (
            'mongodb+srv://surge_intern_assignment:Iamkavindu2000710@surge.k7yksk9.mongodb.net/?retryWrites=true&w=majority', 
             {
                useNewUrlParser: true,
                useUnifiedTopology: true
             }
        );
        console.log('Database connection success');
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;