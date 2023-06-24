const { callbackify } = require("util");

function asincrona(callback){
    setTimeout(function(){
        try {
            let a = 3 + Z;
            callback(null, a);
        } catch (e){
            callback(e);
        }
    }, 1000);
}

asincrona(function(err, dato){
    if (err){
        console.error('tenemos un error')
        console.error(err);
        return false;
    }
    console.log('todo ha ido bien, mi data es', dato);
    
});