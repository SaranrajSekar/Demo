const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const expressGraphQL = require('express-graphql')
const { graphqlHTTP } = expressGraphQL
dotenv.config();
const routes = require(path.join(__dirname, 'Routes', 'routes.js'))
const schema = require('./QL_placeSchema.js')

const port = process.env.PORT;
const Database = process.env.DATABASE;

mongoose.set('strictQuery', true)
mongoose.connect(Database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    console.log(err ? err : 'Database connected successfully');
})
console.log(`${new Date().toLocaleDateString()}001`);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(routes)
app.use('/graphql', graphqlHTTP({
    schema,
    pretty: true,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`GraphQL server listen on the port number ${port}`);
})

