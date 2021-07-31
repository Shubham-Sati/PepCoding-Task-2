
let fs = require("fs");

function removeSpace(input){

        let path = input[1];

        if( fs.existsSync(path) == false ){
            console.log(" Please enter valid input path for ====> " + path );
            return;
        }

        let content = "" + fs.readFileSync( path );
        let lines = content.split(/\r?\n/);

        let ans = "";
        for( let i = 0 ; i < lines.length ; i++ ){
            if( lines[i].length > 0 ){
                ans += lines[i] + "\n";
            }
        }
        console.log(ans);

}

function giveNumber(input){
        let path = input[1];

        if( fs.existsSync(path) == false ){
            console.log(" Please enter valid input path for ====> " + path );
            return;
        }
 
        let content = "" + fs.readFileSync( path );
        let lines = content.split(/\r?\n/);

        let ans = "";
        for( let i = 0 ; i < lines.length ; i++ ){
            ans += (i + 1) +". " + lines[i] + "\n";
        }
        console.log(ans);
}

function giveNumber2(input){
    let path = input[1];

        if( fs.existsSync(path) == false ){
            console.log(" Please enter valid input path for ====> " + path );
            return;
        }
 
        let content = "" + fs.readFileSync( path );
        let lines = content.split(/\r?\n/);

        let ans = "";
        let j = 0;
        for( let i = 0 ; i < lines.length ; i++ ){
            if( lines[i].length > 0 ){
                ans += (j + 1) +". " + lines[i] + "\n";
                j++;
            }
        }
        console.log(ans);
}



module.exports = {
    removeSpace : removeSpace,
    giveNumber : giveNumber,
    giveNumber2 : giveNumber2,
}
