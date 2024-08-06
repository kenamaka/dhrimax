
// user registration verification

function verify() {
    const sql = `SELECT * FROM users WHERE token = ?`;
    db.query(sql, [req.params.token], (error, results) => {
      if (error) {
        return res.send({ error: 'Error verifying Account' });
      }
      if (!results.length) {
        return res.send({ error: 'Invalid Verification token' });
      }
      const sql = `UPDATE users SET status = "active" WHERE email = ?`;
      db.query(sql, [results[0].email], (error) => {
        if (error) {
          return res.send({ error: 'Error verifying Account' });
        }
        return res.send({ message: 'Account verified' });
      });
    });
}