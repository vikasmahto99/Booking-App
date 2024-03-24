const figlet = require("figlet");

figlet("vikas mahto", function(err,data) {
    if(err){
        console.log("Something went Wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});