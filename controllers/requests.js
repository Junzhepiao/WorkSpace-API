const knex = require("../db/knex.js");

module.exports = {

    getAllRequests:(req,res)=>{
        knex('requests').then(requests => res.json(requests))
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
    },
    
    getRequest:(req,res)=>{
        knex('requests').where('id', req.params.rid).then(request => res.json(request))
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
    },
  
    postRequest:(req,res)=>{
        knex('requests').insert({
            user_id: req.body.user_id,
            title: req.body.title,
            reason: req.body.reason,
            hours: req.body.hours,
            approve: false
        }).then(()=>{
            knex('requests').then(request=>res.json(request))
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })   
    },

    approveRequest(req, res) {
        knex('requests')
          .where('id', req.params.rid)
          .update(req.body)
          .then(()=>{
              knex('requests').where('id', req.params.rid)
              .then(request => res.json(request))
          })
          .catch(err=>{
              res.status(500).json({
                  error:err
              })
          })
  },


    denyRequest(req, res) {
        knex('requests')
          .where('id', req.params.rid)
          .del()
          .then(() => {
              knex('requests').then(requests=>res.json(requests))  //getting all events
          })
          .catch(err=>{
              res.status(500).json({
                  error:err
              })
          })
  }
}