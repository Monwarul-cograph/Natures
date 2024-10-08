// const fs = require('fs');
// const express = require('express');
// const app = express();

// // app.get('/', (req,res) => {
// //     res.status(200)
// //     .json({message:'hello from the server', app: 'Natours'});
// // });

// // app.post('/', (req, res)=> {
// //     res.send('You can post to this endpoint....');
// // })
// const tours = JSON.parse(fs.readFileSync('dev-data/data/tours-simple.json'));

// app.get('/api/v1/tours', (req, res) => {
//     res.status(200).json({
//         status:'success',
//         data: {
//             tours
//         }
//     });

// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
// });




const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());

const tours = JSON.parse(fs.readFileSync('dev-data/data/tours-simple.json'));

app.get('api/v1/tours', (req,res) => {
    res.status(200).json({
        status: 'Success',
        results:tours.length,
        data:{tours}

    });

});

const port = 3000;
app.listen(port, () => {
    console.log(`app running on port ${port}...`);
});