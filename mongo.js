const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  tags: [String]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;



const mongoose = require('mongoose');

// Replace 'your_database_url' with your actual MongoDB connection string
mongoose.connect('your_database_url', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

  app.post('/text-search', bodyParser.json(), async (req, res) => {
    try {
      const { query } = req.body;
      const searchResults = await Product.find({ $text: { $search: query } });
      res.json(searchResults);
    } catch (error) {
      res.status(500).send(error.toString());
    }
  });

  db.products.createIndex({ name: "text", description: "text", tags: "text" });