const express = require('express');
const app = express();

// Configuración básica del servidor
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
