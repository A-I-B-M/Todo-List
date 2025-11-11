const pool = require('./db');

(async () => {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('Connected to DB at:', res.rows[0]);
    } catch (err) {
        console.error('Connection failed:', err.message);
    } finally {
        pool.end();
    }
})();
