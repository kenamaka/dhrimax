const jwt = require('jsonwebtoken');
const crypto = require('crypto')
const bcrypt = require("bcrypt");
const saltRound = 10
const nodemailer = require("nodemailer");



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
  
// generate registration token
  function generateToken() {
    return crypto.randomBytes(4).toString('hex');
  }


// controllers for login, registration, verify, voting and payment

function register(req, res) {


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
    
  
  }
  function login(req,res){
    
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
  }
  
  const user= ( authMiddleware,  (req, res) => {
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
  


module.exports = {
    login,
    register,
    user
};