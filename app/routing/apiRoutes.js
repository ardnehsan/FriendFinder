var path = require('path');
var friendData = require('../data/friends.js');

module.exports = function(app){
    app.get('/api/friends', function (req,res){
        res.json(friendData);
    });

    app.post('api/friends', function(req,res){
        var perfectMatch;
        var originalDiff = 0;
    

    var newUser = req.body;



    
    for(var i=0; i<friendData.length; i++)
    {
        var difference = 0;
        console.log(friendData[i].name);
    
        for(var x=0;x<10;x++){
            difference += Math.abs(newUser.scores[x] - parseInt(friendData[i].scores[x]));
     
            if(difference <= originalDiff)
            {
                perfectMatch = friendData[i];
                
            }
        }
        
    }
    
    


    friendData.push(newUser);

    });
}