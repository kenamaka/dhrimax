//dependencies
const cors = require("cors");
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');
const multer = require('multer')
const mysql = require("mysql");
const bodyPaser = require("body-parser");
const bcrypt = require("bcrypt");
const cookiesPaser = require("cookie-parser");
const saltRound = 10
const session = require("express-session");
require('dotenv').config();
const nodemailer = require("nodemailer");
const e = require("cors");
const crypto = require('crypto')

//dependencies

app.use(express.json())

const port = process.env.port || 8000;
app.listen(port, () => console.log(`listening on ${port}`));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)

// json web token middle ware setup
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).send('Missing authorization header');
    return;
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send('Invalid token');
  }
};


app.use(cookiesPaser())

const db = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "",
  database: "lyrics_db",
});



app.use(bodyPaser.urlencoded({ extended: true }))

  app.use(session({
  key: 'userId',
  secret: 'alwaysknowthatyoutimecounts',
  resave: false,
  saveUninitialized: false,
  cookie: {
   expires: 60 * 60 * 24 * 7,
  }
}))



// storage path for pictures
const picstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../rythmlyrics/public/uploads/images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

// storage path for videos
const vidstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../rythmlyrics/public/uploads/videos')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

const picupload = multer({storage:picstorage })
const vidupload = multer({ storage: vidstorage })




// all form routes

// Checking user account

// Contestants file upload session


app.put('/api/picture', picupload.single('file'), (req, res) => {
  const file = req.file;

  const email = req.body.email
  console.log(file,email)

  db.query("UPDATE users  SET picture = ? WHERE email = ? ",
    [
      req.file.filename,
      email
    ],
      ((err, result) => {
        if (err) {
        
          console.err(err)
          res.send({error:"Something went wrong, try again!!"})
      }
      else {
          res.send({ message:"Profile Picture Uploaded Successfully" })
          }
  }))
})


app.put('/api/video', vidupload.single('file'), (req, res) => {
  const file = req.file;

  const email = req.body.email
  console.log(file,email)

  db.query("UPDATE users  SET video = ? WHERE email = ? ",
    [
      req.file.filename,
      email
    ],
      ((err, result) => {
        if (err) {
        
          console.err(err)
          res.send({error:"Something went wrong, try again!!"})
      }
      else {
          res.send({ message:"Video Uploaded Successfully" })
          }
  }))
})



app.post('/api/register', picupload.single('file'), (req, res) => {
  const file = req.file;

  const fullname = req.body.fullname;
  const stagename = req.body.stagename;
  const craftname = req.body.craftname;
  const stateoo = req.body.stateoo;
  const emailadd = req.body.emailadd;
  const phonenum = req.body.phonenum;
  const password = req.body.password;
  const whatsappnum = req.body.whatsappnum;
  const nationality = req.body.nationality;
  const verificationToken = generateToken()
  console.log(verificationToken)

  bcrypt.hash(password, saltRound, (err, hash) => {
    if (err)
    { console.log(err) }
    let sql = "INSERT INTO users (fullname,stagename,craftname,stateoo,email,password,phone,whatnumber,nationality,token ) VALUE  (?,?,?,?,?,?,?,?,?,?)";
    db.query(sql, [
      fullname,
      stagename,
      craftname,
      stateoo,
      emailadd,
      hash,
      phonenum,
      whatsappnum,
      nationality,
      // req.file.filename,
      verificationToken
    ],
      (err, result) => {
        if (err) {
         return res.send({error:"User Account already exist. Enter valid cridentials or goto Login"})                     
        }

        //  Emaill Verification

    // Nodemailer Transport
let transporter = nodemailer.createTransport({
  host: 'rhythmandlyricsproject.com',
  port: 465,
  secure: true,
  auth: {
    user: 'verifiy@rhythmandlyricsproject.com',
    pass: 'rhythmlyricsmail550'
  },
  tls : { rejectUnauthorized: false }
});
  
  const mailOptions = {
    from: 'verifiy@rhythmandlyricsproject.com',
    to: emailadd,
    subject: 'Welcome to Rhythm and Lyrics Project - Please Verify Your Account',
    html: ` `
        };
        
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error(error)
      return res.send({verify: 'Error Sending Verification Email, Email Account Does Not Exist, or Check your Network Connection'})
    } 
      return res.send({message: "Verification Email Sent"})
    
  }) 
 
        
    });
  })
  

})

// generating verification token
function generateToken() {
  return crypto.randomBytes(4).toString('hex');
}


app.get('/api/verify/:token', (req, res) => {
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
});


//user login

app.get('/api/user', authMiddleware,  (req, res) => {
  const userId = req.user.id;

  db.query(
    "SELECT * FROM users WHERE id = ?", userId,
    (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    }
)
});




app.post('/api/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  db.query(
      ' SELECT * FROM users WHERE email = ? ',email,
    
      (err, result) => {
          if (err) {
            res.send({ err: err });
            console.log(err)
        }
        if (!result.length) {
          return res.send({ err: 'Invalid User. Enter a valid User credentials' });
        }
        if (result[0].status === "pending") {
          return res.send({err:'Account Verification requred, go to your email and verifiy account' })
          
        }
          if (result.length > 0) {
              bcrypt.compare(password, result[0].password, (error, response) => {
                  if (response) {
                      // req.session.user = result;
                      console.log(result[0].email)
                    const user = {
                      id: result[0].id,
                      email: result[0].email
                      
                    };
                    const token = jwt.sign({id:result[0].id,email:result[0].email}, process.env.JWT_KEY, { expiresIn: '1h' });
                    res.send({ token })
                  } else {
                      res.send({err:"Invalid password. Enter a valid User password"})
                  }
              })
          }
          else {
              res.send({err:"Invalid User. Enter a valid User credentials"})

          }
          
      })
})


// account recovery


app.post('/api/forgot', (req, res) => {
  const email = req.body.email
  const vertoken = generateToken()

  console.log(vertoken)
  db.query(
    "SELECT * FROM users WHERE email = ?", email,
    (err, result) => {
      if (err) {
        res.send({ err: err })
        console.log(err)
      }
      if (result.length > 0) {
        res.send(result)
        let stagename = result[0].stagename
        console.log(stagename)
  
        let transporter = nodemailer.createTransport({
          host: 'rhythmandlyricsproject.com',
          port: 465,
          secure: true,
          auth: {
            user: 'verifiy@rhythmandlyricsproject.com',
            pass: 'rhythmlyricsmail550'
          },
          tls : { rejectUnauthorized: false }
        });
    const mailOptions = {
      from: 'verifiy@rhythmandlyricsproject.com',
      to: email,
      subject: 'Password Reset | Rhythm and Lyrics Project',
      html: `
      <div style="max-width:600px;">
      <div style="text-align:center; font-family:Calibri, Futura; background-color:#eeefea"><br><br>
      <h2><strong> Password Reset</strong></h2>
      <h3> Dear ${stagename}</h3>
      <h5>We recieved a request from you for <strong>Password Reset.</strong></h5>
      <p> If you didn't make this request, please ignore this mail. </p>
  
      <a
      style= " background-color: #082465; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration:none; display: inline-block;font-size: 16px;"
      href="http://localhost:3000/user.password.reset/${stagename}"> Reset Password
      </a>
      <br><br>
      </div>
      </div>
      
      `
    };
  
        transporter.sendMail(mailOptions, (error) => {
          if (error) {
            console.log(error)
            return res.send({verify: 'Error Sending Verification Email, Email Account Does Not Exist, or Check your Network Connection'})
          }
          return res.send({message:"Verification Email Sent"})
  })
      }
      else {
        res.send({message:"Account does not exit, Enter a valid email address"})
      }

      // Email Verification

      
    }
  )
})


app.get('/api/recovery/:token', (req, res) => {
  const sql = `SELECT * FROM users WHERE stagename = ?`;
  db.query(sql, [req.params.token], (error, results) => {
    if (error) {
      return res.send({ error: 'Error verifying Account' });
    }
    if (!results.length) {
      return res.send({ error: 'Invalid Verification token' });
    }
  
  res.send(results)
  
  });
});

app.put("/api/reset", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log(password);

  bcrypt.hash(password, saltRound, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "UPDATE users  SET  password = ? WHERE email = ? ",
      [ hash, email],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          // res.send(result);

          res.send({ message: "Password Changed" });
        }
      }
    );
  });
});





app.get('/api/get', (req, res) => {
  db.query(
      "SELECT * FROM users",
      (err, result) => {
          res.send(result)
          // console.log(result)
      }

  )
})

// app.get('/api/login', (req, res) => {
//   if (req.session.user) {
//       res.send({ loggedIn: true, user: req.session.user });
//   } else {
//       res.send({ loggedIn: false });
//   }
// })



// Voting system 



app.post('/api/payment', (req, res) => {
  const id = req.body.id
  const sql = `SELECT * FROM users WHERE id = ?`;
  db.query(sql, [id], (error, results) => {
    if (error) {
      return res.send({ error: 'Error verifying Account' });
    }
console.log(results[0].email)
    const currentVotes = results[0].votes;
    const newVote = currentVotes + 1;

    const sql = `UPDATE users SET votes = ? WHERE id = ?`;
    db.query(sql, [newVote,id], (error) => {
      if (error) {
        return res.send({ error: 'An Error Occured' });
      }
      return res.send({ message: 'Voting Successfull' });
    });
  });
});




app.get('/api/voting/:id', (req, res) => {
  const stagename = req.params.id;
  
  db.query(
      "SELECT * FROM users WHERE stagename = ?", stagename,
      (err, result) => {
          if (err) {
              console.log(err)
          }
          res.send(result)
      }
  )
})


// contact session mail to admin with user email and other parameters
app.post('/api/contact', (req, res) => {
  const name = req.body.name
  const message = req.body.message
  const subject = req.body.subject
  const phone = req.body.phone
  const email = req.body.email

  let transporter = nodemailer.createTransport({
    host: 'rhythmandlyricsproject.com',
    port: 465,
    secure:true,
    auth: {
      user: 'contact@rhythmandlyricsproject.com',
      pass: 'data4rhythmlyrics550.co'
    },
    tls : { rejectUnauthorized: false }
  }); 

const mailOptions = {
from: 'contact@rhythmandlyricsproject.com',
to: 'contact@rhythmandlyricsproject.com',
subject: subject,
html: `
<div style="max-width:600px;">
<div style="text-align:left; font-family:Calibri, Futura; background-color:#ffffff"><br><br>
<h5><strong> Message from ${name}</strong></h5>
<h5><strong> Subject: ${subject}</strong></h5><br>
<p>${message}</p>
<p> Phone: ${phone}</p>
<p> Email Address: ${email}</p>
<br><br>
</div>
</div>

`
};

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error)
      return res.send({verify: 'Error Sending Message, check network connection and try again'})
    }
    return res.send({message:"Message Sent"})
})

})


// support session mail to me with user parameters
app.post('/api/support', (req, res) => {
  const stagename = req.body.stagename
  const message = req.body.message
  const subject = req.body.subject
  const email = req.body.email

  let transporter = nodemailer.createTransport({
    host: 'rhythmandlyricsproject.com',
    port: 465,
    secure:true,
    auth: {
      user: 'support@rhythmandlyricsproject.com',
      pass: 'rhythmlyricsmail550'
    },
    tls : { rejectUnauthorized: false }
  }); 

const mailOptions = {
from: 'support@rhythmandlyricsproject.com',
to: 'support@rhythmandlyricsproject.com',
subject: subject,
html: `
<div style="max-width:600px;">
<div style="text-align:left; font-family:Calibri, Futura; background-color:#ffffff"><br><br>
<h5><strong> Message from ${stagename}</strong></h5>
<h5><strong> Subject: ${subject}</strong></h5><br>
<p>${message}</p><br>
<p> Email Address: ${email}</p>
<p>${stagename}</p>
<br><br>
</div>
</div>

`
};

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error)
      return res.send({verify: 'Error Sending Message, check network connection and try again'})
    }
    return res.send({message:"Message Sent"})
})

})

// api to fetch data from database

app.get('/api/users', (req, res) => {
  db.query(
    'SELECT * FROM users',
    (err, result) => {
      res.send(result)
      console.log(result)

    }
  )
})

