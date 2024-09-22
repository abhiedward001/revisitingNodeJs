import express from 'express';
import 'dotenv/config';

const app = express();


const rawData = [
  {
    name: 'Tanya',
    age: 22,
  }, {
    name: 'Ayushi',
    age: 24
  },
  {
    name: 'Jaiswal',
    age: 24
  }
];


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json([{
    name: 'John',
    age: 25,
    familyName: {
      father: 'John Sr.',
      mother: 'Jane'
    }
  }, {
    name: 'Jane',
    age: 24
  }]);
});

app.get('/api/aboutme', (req, res) => {
  res.json(rawData);
});
app.get('/user/query', (req, res) => {

  console.log(req.query);
  res.status(200).json(req.query);
})

app.listen(port, () => {
  console.log(` Server is running on port ${port}`);
});