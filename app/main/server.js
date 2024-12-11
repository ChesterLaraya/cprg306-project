const express = require('express');
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();

const app = express();
const PORT = 3001;

// Route to fetch sneaker details by name
app.get('/api/sneakers', (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).json({ error: 'Sneaker name is required' });
    }

    sneaks.getProducts(name, 10, (err, products) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error fetching sneakers' });
        }

        res.json(products);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
