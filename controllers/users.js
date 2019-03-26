const knex = require("../db/knex.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports = {
    register: function(req, res) {
        knex('users').where('email',req.body.email).then((result)=>{    //check email already exist or not
           if (result.length >= 1 ){                                    //if email already exist return message
               return res.status(409).json({
                   message:'email exists'
               }) 
           }else{                                                       // if email does not exist 
            //    bcrypt.hash(req.body.password, 10, (err, hash)=>{        // start to hash password
            //        if (err){                                            // if fail return error
            //            return res.status(500).json({
            //                error:err
            //            });
            //        }else{                                               //if success insert new user with hash password
            //             knex('users').insert({
            //                 first_name: req.body.first_name,
            //                 last_name: req.body.last_name,
            //                 email: req.body.email,
            //                 password: hash,
            //                 role: req.body.role,
            //                 img_url: req.body.img_url,
            //                 phone: req.body.phone,
            //                 sick_hours: req.body.sick_hours,
            //                 vacation_hours: req.body.vacation_hours,
            //                 active: true
            //             }).then(()=>                                    //then get data of that new user that created
            //                     knex('users').where('email',req.body.email).then(users => res.json(users))
            //                 )
            //        }
            //    })
            knex('users').insert(req.body)
            // .then(()=>{
            //   knex('users').where('email',req.body.email).then(users => res.json(users))
            // })
            .then(()=>{
                return res.status(200).json({
                    message:'Regist Success!'
                }) 
            })
           }
        })
    },

    login: (req, res) => {
        knex('users').where('email', req.body.email).then((user)=> {
            // if(user.length < 1) {
            //     return res.status(401).json({
            //         message:'Auth failed'
            //     })
            // }
            // bcrypt.compare(req.body.password, user[0].password, (err,result)=>{
            //     if (err) {
            //         return res.status(401).json({
            //             message:'Auth failed'
            //         })
            //     }
            //     if (result){
            //         jwt.sign({
            //             email: user[0].email,
            //             userId: user[0].id
            //         }, process.env.JWT_KEY)
            //     }
            //     res.status(401).json({
            //         message:'Auth failed'
            //     })
            // })
        if (user.length > 0 && user[0].email == req.body.email && user[0].password == req.body.password){
                return res.json(user[0])          
        }
        else {
                return res.status(401).json({
                 message:'Auth failed'
                })
            }
        }) 
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
    },

    getUser:(req,res)=>{
        knex('users').where('id',req.params.uid).then(user => res.json(user))
        .catch(err=>{
          res.status(500).json({
              error:err
          })
      })
    },

    getAllUser:(req,res)=>{
      knex('users').then(users => res.json(users))
      .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
    },

    updateUser(req, res) {
        knex('users')
          .where('id', req.params.uid)
          .update(req.body)
          .then(()=>{
              knex('users').where('id', req.params.uid)
              .then(user => res.json(user))
          })
    },

    deleteUser(req, res) {
        knex('users')
          .where('id', req.params.uid)
          .del()
          .then(() => {
            return res.status(200).json({
                message:'User Deleted!'
                })
          })
          .catch(err=>{
              res.status(500).json({
                  error:err
              })
          })
      }
}

