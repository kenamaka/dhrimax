//dependencies
const cors = require("cors");
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');
const multer = require('multer')
const mysql = require("mysql");
const bodyPaser = require("body-parser");
const bcrypt = require("bcrypt");
const cookiePaser = require("cookie-parser");
const saltRound = 10
const session = require("express-session");
require('dotenv').config();
const nodemailer = require("nodemailer");
const e = require("cors");
const crypto = require('crypto')
const path = require('path')
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



app.use(cookiePaser())
app.use(bodyPaser.urlencoded({ extended: true }))

// app.use(session({
//   key: 'userId',
//   secret: process.env.JWT_KEY,
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//    expires: 60 * 60 * 24 ,
//   }
// }))


const db = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "",
  database: "lyrics_db",
});

// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     res.status(401).send('Missing authorization header');
//     return;
//   }

//   try {
//     const decodedToken = jwt.verify(token, process.env.JWT_KEY);
//     req.user = decodedToken;
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).send('Invalid token');
//   }
// };


const authMiddleware = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  const token = authorizationHeader ? authorizationHeader.split(' ')[1] : undefined;

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

  const token = req.body.token
  console.log(file)

  db.query("UPDATE users  SET picture = ? WHERE token = ? ",
    [
      req.file.filename,
      token
    ],
      ((err, result) => {
        if (err) {
        
          console.err(err)
          res.send({ error: "Something went wrong, try again!!" })
          return;
      }
      else {
          res.send({ message:"Profile Picture Uploaded Successfully" })
          }
  }))
})




app.post('/api/register', (req, res) => {
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
          return res.send({ error: "User Account already exist. Enter valid cridentials or goto Login" }) 
          
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
  
const htmlTemplate = `
<html>
  <body>
    <h1>Welcome to Rhythm and Lyrics Project - Please Verify Your Account</h1>
    <p>Thank you for registering!</p>
    <img src="cid:logo" alt="Site Logo">
  </body>
</html>
`;
  const mailOptions = {
    from: 'verifiy@rhythmandlyricsproject.com',
    to: emailadd,
    subject: 'Welcome to Rhythm and Lyrics Project - Please Verify Your Account',
    html: ` `,
    attachments: [
      {
        filename: 'logo.png',
        path: '../public_html/logo.png',
        cid: 'logo',
      },
    ],

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
  return crypto.randomBytes(12).toString('hex');
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

app.post('/api/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  db.query(
      ' SELECT * FROM users WHERE email = ? ',email,
    
      (err, result) => {
          if (err) {
            res.send({ err: err });
            console.log(err)
            return;
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
                      // console.log(result[0].email)

                    const user = {
                      id: result[0].id,
                      email: result[0].email
                      
                    };
                    console.log(user)

                    const token = jwt.sign(user, process.env.JWT_KEY, { expiresIn: '1h' });
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



app.get('/api/loggedin', authMiddleware,  (req, res) => {
  const userId = req.user.id;

  console.log(userId)

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


app.get('/api/upload/:token', (req, res) => {
  const sql = `SELECT * FROM users WHERE token = ?`;
  db.query(sql, [req.params.token], (error, results) => {
    if (error) {
      return res.send({ err: error });
    }
    if (!results.length) {
      return res.send({ error: 'Invalid Token' });
    }
  res.send(results)
  });
});



// app.post('/api/payment', (req, res) => {
//   const id = req.body.id
//   const point = req.body.point
//   const sql = `UPDATE users SET votes = votes + 1  WHERE id = ?`;
//   db.query(sql, [id], (error, results) => {
//     if (error) {
//       return res.send({ error: 'Error verifying Account' });
//     }
// res.send(results)
//   });
// });


app.post('/api/payment', (req, res) => {
  const id = req.body.id
  const point = req.body.point
  const sql = `SELECT * FROM users WHERE id = ?`;
  db.query(sql, [id], (error, results) => {
    if (error) {
      return res.send({ error: 'Error verifying Account' });
    }
res.send(results)
const sql = `UPDATE users SET votes = ?   WHERE id = ?`;
db.query(sql,[results[0].votes + point,id])
  });
});





app.get('/api/voting/:user_id', (req, res) => {
  const sql = `SELECT * FROM users WHERE token = ?`;
  db.query(sql, [req.params.user_id], (error, results) => {
    if (error) {
      console.log(error)

      return res.send({ err: error });
    }
    if (!results.length) {
      return res.send({ error: 'Invalid User' });
    }
    else {
      res.send(results)
    }
  });
});



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
    `
    SELECT users.*, total.count
    FROM users
    JOIN (SELECT COUNT(*) AS count FROM users WHERE role = "none") AS total WHERE users.role = "none";
    `,
    (err, result) => {
      res.send(result)
      console.log(result)
      console.log(err)

    }
  )
})
    
    


app.get('/api/active', (req, res) => {
  db.query(
    `
    SELECT users.*, total.count
    FROM users
    JOIN (SELECT COUNT(*) AS count FROM users WHERE first_link != "") AS total WHERE users.first_link != "";
    `,
    (err, result) => {
      res.send(result)
      console.log(result)

    }
  )
})

app.get('/api/stage1', (req, res) => {
  db.query(
`
    SELECT users.*, total.count
    FROM users
    JOIN (SELECT COUNT(*) AS count FROM users WHERE votes >= 40 ) AS total WHERE users.votes >= 40;
`,
 
    (err, result) => {
      res.send(result)
      console.log(result)

    }
  )
})

app.get('/api/stage2', (req, res) => {
  db.query(
    `
    SELECT users.*, total.count
    FROM users
    JOIN (SELECT COUNT(*) AS count FROM users WHERE votes >= 80) AS total WHERE users.votes >= 80;
`,

    (err, result) => {
      res.send(result)
      console.log(result)

    }
  )
})
app.get('/api/final', (req, res) => {
  db.query(
    `
    SELECT users.*, total.count
    FROM users
    JOIN (SELECT COUNT(*) AS count FROM users WHERE selected = "True") AS total WHERE users.selected = "True";
`    
    ,
    (err, result) => {
      res.send(result)
      console.log(result)

    }
  )
})

// user editing and updating api

app.get('/api/edit/:id', (req, res) => {
  
  const id = req.params.id;

  db.query(
    "SELECT * FROM users WHERE id = ?",id,
    (err, result) => {
      if (err) {
        console.log(err)
      }
      res.send(result)
    }
  )
})

// app.put('/api/update', (req, res) => {
  
// })


// invitation link for Invite, stage one, stage two and final

app.post('/api/invite', (req, res) => {

  const email = req.body.email
  const stagename = req.body.stagename
  const voting_link = req.body.voting

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
    to: email,
    subject: 'Invitation for Stage 2 | Rhythm and Lyrics Project',
    html: `
    <div style="max-width:600px;">
    <div style="text-align:center; font-family:Calibri, Futura; background-color:#eeefea"><br><br>
    <h2><strong> Congratulations</strong></h2>
    <h3> Dear ${stagename}</h3>
    <h5>You have qualified for the GOLDEN STAGE AUDITIONS (Stage 2).</strong></h5>
    <p> Goto your dashboard and upload a performance video of your craft, not more than two minutes(2mins).<br> 
    Here, any form of accompainment is required for your upload, but at a reduced volume level in other to optimize your performance.</p> <br> <br>
    
    <a
    style= "   
    display: inline-block;
    background-color:#ffc107;
    padding: 10px 18px;
    border-radius: 10px;
    font-size: 13px;
    text-transform: uppercase;
    border: 1px solid transparent;
    color: #082465;
    transition: all 0.3s ease 0s;
    font-weight: 600;"
    href="https://rhythmandlyricsproject.com/signin"> Let's Go
    </a>
    <br><br>
  <p> Best of Luck</p><br>
  <p> Screening Team.</p>


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

app.put("/api/sociallink", (req, res) => {
  // id, socialLink,buyLink,stagename,email
  const id = req.body.id;
  const link = req.body.socialLink
  const email = req.body.email
  const stagename = req.body.stagename
  const buyLink = req.body.buyLink

    
  db.query(
    "UPDATE users SET social_link = ? where id = ?", [link, id],
    (err, result) => {
      if (err) {
        console.log(err);
        return false;
      }
try{
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
        to: email,
        subject: 'Notification | Rhythm and Lyrics Project',
        html: `
        <div style="max-width:600px;">
        <div style="text-align:center; font-family:Calibri, Futura; background-color:#eeefea"><br><br>
        <h3> Hi ${stagename}</h3>
        <h5>Hope you are doing great.</h5>
        <p>This is to is to inform you that your link is ready.<br> 
        You can start adding points to your account immediately, get engaged with your audience and fans.</p> <br> <br>
        <p> <span syle="color:#082465;">NOTE: <span> You need aleast 100 point for this stage of the competition.</p>
        <p>Voting: ${buyLink}</p>
        <br><br>
      <p> Best of Luck</p><br>
      <p> Screening Team.</p>
        </div>
        </div>
        
        `
      };
    
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.log(error)
          return res.send({error: 'Error Sending Message, check network connection and try again'})
        }
        else return res.send({message:"Message Sent"})
    })
  
  } catch (error) {
    console.log("Error sending Email")
    res.status(500).send('Internal Server Error')
      
  }
  }

      // res.send(result)
    
  )
}
)


app.put("/api/selected", (req, res) => {
  const id = req.body.id;
  const selected = req.body.selected
  const email = req.body.email
  const stagename = req.body.stagename
    
  db.query(
    "UPDATE users SET selected = ? where id = ?", [selected, id],
    (err, result) => {
      if (err) {
        console.log(err);
      }

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
        to: email,
        subject: 'Invitation | Rhythm and Lyrics Project',
        html: `
        <div style="max-width:600px;">
        <div style="text-align:center; font-family:Calibri, Futura; background-color:#eeefea"><br><br>
        <h2><strong>Congratulations !!!</strong</h2>
        <h3> Hi ${stagename}</h3>
        <h5>Hope you are doing great.</h5>
        <p>This is to is to inform you have qualified for the Super House.<br> 
        You are here by Invited to Lagos, get engaged with your audience and fans.</p> <br> <br>
        <br><br>
      <p> Kind Regards.</p><br>
      <p> Screening Team.</p>
        </div>
        </div>
        
        `
      };
    
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.log(error)
          return res.send({error: 'Error Sending Message, check network connection and try again'})
        }
        return res.send({message:"Message Sent"})
    })
      res.send(result)
    }
  )
}
)
 





app.post("/api/admin", picupload.single('file'), (req, res) => {
  const file = req.file;
  const email = req.body.email;
  const role = req.body.role;
  const status = req.body.status;
  const stagename = req.body.stagename;
  const password = req.body.password;

  bcrypt.hash(password, saltRound, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "INSERT INTO users (stagename,email,status,role,password,picture) VALUES (?,?,?,?,?,?)",
      [stagename,email,status,role,  hash, req.file.filename],

      (err, result) => {
        if (err) {
          console.log(err)
          res.send({
            err:"User Already Exist"
          });
        
        }
        else {
          console.log(result);
          res.send({
            message:
              "User Registration Successful",
          });
        }
      }
    );
  });
});


app.post('/api/adminlogin', (req, res) => {
  const email = req.body.email
    const password = req.body.password
  
    db.query(
        "SELECT * FROM users WHERE email = ?",
        email, 
        (err, result) => {
            if (err) {
                res.send({err:err});
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        req.session.user = result;
                        console.log(req.session.user)
                        res.send(result)
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



app.get('/api/search', (req, res) => {
  const searchTerm = req.query.term;

  // Execute the MySQL query to search for records with first three letters matching the input
  const sql = `SELECT * FROM users WHERE stagename LIKE '${searchTerm}%' OR fullname LIKE '${searchTerm}%'`;

  db.query(sql, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.json(results);
    }
  });
});


app.get('/api/votes/:id', (req, res) => {

  
  const sql = `SELECT votes FROM users WHERE id = ?`;
  db.query(sql, [req.params.id], (error, results) => {
    if (error) {
      return res.send({ error: 'Error fetching votes' });
    }
    else{

      console.log(results)

      res.send({voteCount: results[0].votes})

    } 
   
  });
});