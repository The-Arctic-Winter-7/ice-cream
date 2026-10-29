// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3001;

// Create an array to store orders
const orders = [];

// Serve static files from the "public" directory
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get('/', (req, res) => {
    res.render('home');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});