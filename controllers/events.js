const knex = require("../db/knex.js");

module.exports = {

    getAllEvents:(req,res)=>{
        knex('events').then(events => res.json(events))
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
    },
    
    getEvent:(req,res)=>{
        knex('events').where('id', req.params.eid).then(event => res.json(event))
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
    },
  
    postEvent:(req,res)=>{
        knex('events').insert({
            user_id: Number(req.body.user_id),
            title: req.body.title,
            time: req.body.time,
            date: req.body.date,
            duration:req.body.duration
        }).then(()=>{
            knex('events').then(events=>res.json(events))
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })   
    },

    deleteEvent(req, res) {
        knex('events')
          .where('id', req.params.eid)
          .del()
          .then(() => {
              knex('events').then(events=>res.json(events))  //getting all events
          })
          .catch(err=>{
              res.status(500).json({
                  error:err
              })
          })
  }
}