const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const PORT = process.env.PORT || 3000;

const start = async (app) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = start;
