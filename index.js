const server = require('./server');
const { PORT, MONGO_URI } = require("./config");
const mongoose = require("mongoose");

mongoose.connect(MONGO_URI, {useNewUrlParser: true}).then(()=> {
    server.listen(3000, () => {
        console.warn(`CodingApp backend running on port ` + 3000);
    });
}).catch(console.log);


