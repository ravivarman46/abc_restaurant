const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcryptjs'); 
const app = express();

app.use(bodyParser.json());
app.use(cors());

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'abc_hotel'
});

db.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the MySQL database.');
  });


const defaultUsers = [
    { email: 'admin@gmail.com', password: bcrypt.hashSync('admin123', 10), role: 'admin' },
    { email: 'staff@gmail.com', password: bcrypt.hashSync('staff123', 10), role: 'staff' }
];


app.post('/signup', (req, res) => {
    const { username, email, password, role } = req.body;
    const sql = 'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)';
    db.query(sql, [username, email, password, role], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error saving user data' });
      }
      res.status(200).json({ message: 'Signup successful' });
    });
  });


app.post('/login', (req, res) => {
    const { email, password, role } = req.body;
  
    // Query to check user credentials
    const query = 'SELECT * FROM users WHERE email = ? AND password = ? AND role = ?';
    db.query(query, [email, password, role], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.length > 0) {
        // Authentication successful
        res.status(200).json({ message: 'Login successful', role: results[0].role });
      } else {
        // Authentication failed
        res.status(401).json({ message: 'Invalid credentials or role' });
      }
    });
  });




// Reservation route
app.post('/reserve', (req, res) => {
    const { date, time, partySize, userId } = req.body;

    const sql = "INSERT INTO reservations (date, time, party_size, user_id) VALUES (?, ?, ?, ?)";
    db.query(sql, [date, time, partySize, userId], (err, result) => {
        if (err) {
            console.error('Reservation error:', err);
            return res.status(500).json({ message: 'Error occurred while making reservation.' });
        }
        res.json({ message: 'Reservation successful!' });
    });
});
app.get('/reservations', (req, res) => {
    const sql = `SELECT * FROM reservations`;

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching reservations:', err);
            return res.status(500).json({ message: 'Error occurred while fetching reservations.' });
        }
        res.json(results); // Return all reservations
    });
});
app.get('/reservations/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM reservations WHERE id = ?`;

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error fetching reservation:', err);
            return res.status(500).json({ message: 'Error occurred while fetching reservation.' });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        res.json(result[0]); 
    });
});
app.put('/reservations/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, phone, date, time, partySize, specialRequests } = req.body;

    const sql = `UPDATE reservations 
                 SET name = ?, email = ?, phone = ?, date = ?, time = ?, party_size = ?, special_requests = ?
                 WHERE id = ?`;

    db.query(sql, [name, email, phone, date, time, partySize, specialRequests, id], (err, result) => {
        if (err) {
            console.error('Error updating reservation:', err);
            return res.status(500).json({ message: 'Error occurred while updating reservation.' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        res.json({ message: 'Reservation updated successfully!' });
    });
});
app.delete('/reservations/:id', (req, res) => {
    const { id } = req.params;

    const sql = `DELETE FROM reservations WHERE id = ?`;

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting reservation:', err);
            return res.status(500).json({ message: 'Error occurred while deleting reservation.' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        res.json({ message: 'Reservation deleted successfully!' });
    });
});

// Route to submit a query
app.post('/submit-query', (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: 'Please fill all the fields.' });
    }

    const sql = `INSERT INTO queries (name, email, phone, message) VALUES (?, ?, ?, ?)`;

    db.query(sql, [name, email, phone, message], (err, result) => {
        if (err) {
            console.error('Error submitting query:', err);
            return res.status(500).json({ message: `Database Error: ${err.message}` });
        }
        res.json({ message: 'Query submitted successfully!' });
    });
});

// Route to get all queries
app.get('/queries', (req, res) => {
    const sql = `SELECT * FROM queries`;

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching queries:', err);
            return res.status(500).json({ message: 'Database Error: Could not fetch queries.' });
        }
        res.json(results);
    });
});

app.get('/queries/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM queries WHERE id = ?`;

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error fetching query:', err);
            return res.status(500).json({ message: 'Database Error: Could not fetch the query.' });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: 'Query not found.' });
        }

        res.json(result[0]);
    });
});

app.put('/queries/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: 'Please fill all the fields.' });
    }

    const sql = `UPDATE queries 
                 SET name = ?, email = ?, phone = ?, message = ?
                 WHERE id = ?`;

    db.query(sql, [name, email, phone, message, id], (err, result) => {
        if (err) {
            console.error('Error updating query:', err);
            return res.status(500).json({ message: `Database Error: ${err.message}` });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Query not found.' });
        }

        res.json({ message: 'Query updated successfully!' });
    });
});
// Route to delete a query by ID
app.delete('/queries/:id', (req, res) => {
    const { id } = req.params;

    const sql = `DELETE FROM queries WHERE id = ?`;

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting query:', err);
            return res.status(500).json({ message: `Database Error: ${err.message}` });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Query not found.' });
        }

        res.json({ message: 'Query deleted successfully!' });
    });
});
// POST: Add a new service
app.post('/services', (req, res) => {
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const sql = 'INSERT INTO services (name, description, price) VALUES (?, ?, ?)';
    
    db.query(sql, [name, description, price], (err, result) => {
        if (err) {
            console.error('Error adding service:', err);
            return res.status(500).json({ message: 'Failed to add service.' });
        }
        res.json({ message: 'Service added successfully!' });
    });
});

// GET: Get all services
app.get('/services', (req, res) => {
    const sql = 'SELECT * FROM services';
    
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching services:', err);
            return res.status(500).json({ message: 'Failed to fetch services.' });
        }
        res.json(results);
    });
});

// GET: Get a service by ID
app.get('/services/:id', (req, res) => {
    const { id } = req.params;
    
    const sql = 'SELECT * FROM services WHERE id = ?';
    
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error fetching service:', err);
            return res.status(500).json({ message: 'Failed to fetch service.' });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Service not found.' });
        }
        res.json(result[0]);
    });
});

// PUT: Update a service by ID
app.put('/services/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const sql = 'UPDATE services SET name = ?, description = ?, price = ? WHERE id = ?';
    
    db.query(sql, [name, description, price, id], (err, result) => {
        if (err) {
            console.error('Error updating service:', err);
            return res.status(500).json({ message: 'Failed to update service.' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Service not found.' });
        }
        res.json({ message: 'Service updated successfully!' });
    });
});

// DELETE: Delete a service by ID
app.delete('/services/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM services WHERE id = ?';
    
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting service:', err);
            return res.status(500).json({ message: 'Failed to delete service.' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Service not found.' });
        }
        res.json({ message: 'Service deleted successfully!' });
    });
});

// API endpoint to save profile
app.post('/saveProfile', (req, res) => {
    const { name, email, phone, address } = req.body;
    const sql = 'INSERT INTO profiles (name, email, phone, address) VALUES (?, ?, ?, ?)';
    
    db.query(sql, [name, email, phone, address], (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Failed to save profile' });
      } else {
        res.send({ message: 'Profile saved successfully' });
      }
    });
  });
// POST: Save a new profile
app.post('/saveProfile', (req, res) => {
    const { name, email, phone, address } = req.body;
    const sql = 'INSERT INTO profiles (name, email, phone, address) VALUES (?, ?, ?, ?)';
    
    db.query(sql, [name, email, phone, address], (err, result) => {
        if (err) {
            console.error('Error saving profile:', err);
            res.status(500).send({ message: 'Failed to save profile' });
        } else {
            res.send({ message: 'Profile saved successfully' });
        }
    });
});

// GET: View all profiles
app.get('/profiles', (req, res) => {
    const sql = 'SELECT * FROM profiles';
    
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error retrieving profiles:', err);
            res.status(500).send({ message: 'Failed to retrieve profiles' });
        } else {
            res.json(results);
        }
    });
});

// GET: View a single profile by ID
app.get('/profiles/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM profiles WHERE id = ?';
    
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error retrieving profile:', err);
            res.status(500).send({ message: 'Failed to retrieve profile' });
        } else if (result.length === 0) {
            res.status(404).send({ message: 'Profile not found' });
        } else {
            res.json(result[0]);
        }
    });
});

// PUT: Update an existing profile by ID
app.put('/profiles/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, phone, address } = req.body;
    
    const sql = 'UPDATE profiles SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?';
    
    db.query(sql, [name, email, phone, address, id], (err, result) => {
        if (err) {
            console.error('Error updating profile:', err);
            res.status(500).send({ message: 'Failed to update profile' });
        } else if (result.affectedRows === 0) {
            res.status(404).send({ message: 'Profile not found' });
        } else {
            res.send({ message: 'Profile updated successfully' });
        }
    });
});

// DELETE: Delete a profile by ID
app.delete('/profiles/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM profiles WHERE id = ?';
    
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting profile:', err);
            res.status(500).send({ message: 'Failed to delete profile' });
        } else if (result.affectedRows === 0) {
            res.status(404).send({ message: 'Profile not found' });
        } else {
            res.send({ message: 'Profile deleted successfully' });
        }
    });
});

app.post('/payments', (req, res) => {
    const { userId, amount, paymentMethod } = req.body;

    if (!userId || !amount || !paymentMethod) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Insert payment into the database
    const sql = `INSERT INTO payments (user_id, amount, payment_method, payment_status) VALUES (?, ?, ?, 'pending')`;
    db.query(sql, [userId, amount, paymentMethod], (err, result) => {
        if (err) {
            console.error('Error processing payment:', err);
            return res.status(500).json({ message: 'Error processing payment.' });
        }

        // Simulate payment confirmation
        const paymentId = result.insertId;
        const confirmSql = `UPDATE payments SET payment_status = 'confirmed' WHERE id = ?`;
        db.query(confirmSql, [paymentId], (err, updateResult) => {
            if (err) {
                console.error('Error confirming payment:', err);
                return res.status(500).json({ message: 'Error confirming payment.' });
            }

            res.json({ message: 'Payment confirmed successfully!', paymentId });
        });
    });
});

// GET: View all payments
app.get('/payments', (req, res) => {
    const sql = `SELECT * FROM payments`;

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching payments:', err);
            return res.status(500).json({ message: 'Error fetching payments.' });
        }

        res.json(results); // Return all payments
    });
});

// GET: View a specific payment by ID
app.get('/payments/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM payments WHERE id = ?`;

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error fetching payment:', err);
            return res.status(500).json({ message: 'Error fetching payment.' });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: 'Payment not found.' });
        }

        res.json(result[0]); 
    });
});


app.put('/payments/:id', (req, res) => {
    const { id } = req.params;
    const { paymentStatus } = req.body;

    if (!paymentStatus) {
        return res.status(400).json({ message: 'Payment status is required.' });
    }

    const sql = `UPDATE payments SET payment_status = ? WHERE id = ?`;

    db.query(sql, [paymentStatus, id], (err, result) => {
        if (err) {
            console.error('Error updating payment status:', err);
            return res.status(500).json({ message: 'Error updating payment status.' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Payment not found.' });
        }

        res.json({ message: 'Payment status updated successfully!' });
    });
});

// DELETE: Delete a payment by ID
app.delete('/payments/:id', (req, res) => {
    const { id } = req.params;

    const sql = `DELETE FROM payments WHERE id = ?`;

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting payment:', err);
            return res.status(500).json({ message: 'Error deleting payment.' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Payment not found.' });
        }

        res.json({ message: 'Payment deleted successfully!' });
    });
});


app.listen(5000, () => {
    console.log('Server running on port 5000');
});