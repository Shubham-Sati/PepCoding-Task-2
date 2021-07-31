
let fs = require("fs");
let snb = require("./commands/snb_commands");


let input = process.argv.slice(2);


if( input[0] == "-s" ){
    snb.removeSpace( input );
}else if( input[0] == "-n" ){
    snb.giveNumber( input );
}else if( input[0] == "-b" ){
    snb.giveNumber2( input );
}else{
    let content = "";
    for( let i = 0 ; i < input.length ; i++ ){
        if( fs.existsSync(input[i]) == false ){
            console.log(" Please enter valid input path for this.===> " + input[i]);
            return;
        }
        content += fs.readFileSync( input[i] ) + "\n";
    }
    console.log(""+content);
}