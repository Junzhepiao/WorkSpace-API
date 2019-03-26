const knex = require("../db/knex.js");

module.exports = {

    getAllChats:(req,res)=>{
        knex('chats').then(chats => res.json(chats))
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
    },
    
    getChat:(req,res)=>{
        knex('chats').where('id', req.params.cid).then(chat => res.json(chat))
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })
    },
  
    postChat:(req,res)=>{
        knex('chats').insert(req.body).then(()=>{
            knex('chats').then(chats=>res.json(chats))
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        })   
    }
}