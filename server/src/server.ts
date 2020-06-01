import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('listagem de usuarios');

    res.send([
        'Diego',
        'Cleiton',
        'Robson',
        'Juao'
    ]);
})

app.listen(333);