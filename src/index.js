const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const userRoutes = require('./routes/user')

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use('/api', userRoutes);

//ruta de prueba
app.get('/', (req, res) => {
    res.send("Prueba1")
});

//Conexión a la Base de datos de mongodb
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error(error));


//Configuración del puerto y apertura del servidor
app.listen(PORT, () => {
    console.log(`Servidor Funcionando en el puerto ${PORT}`);
    console.log(`Link del Servidor http://localhost:${PORT}/`)
});