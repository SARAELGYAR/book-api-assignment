const express = require('express');
const app = express();
const bookRoutes = require('./src/routes/bookRoutes');


app.use(express.json());
app.use('/api', bookRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});