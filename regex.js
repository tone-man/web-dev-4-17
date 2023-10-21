// Deals with all the regular expression conditions

// Option 1: use regexp library
let exprs = [
    /d[\w]+d/g, // 1st way to initalize
    new RegExp("[lL][eE][Tt]{2}[eE][rR]", "g"), // 2nd way to initialize
    new RegExp(/\d+w\d*/, "g"), // 3rd way to initialize
    /X+O{3}/g,
    / ?\w{1,5}( \w{1,5}){3} /g
];

function runChecks() {
    let input = document.getElementById("input-text").value;
    let output = document.getElementById("output");

    output.innerHTML = "";

    for (let i = 0; i < exprs.length; i++) {
        let matches = [];
        let regex = exprs[i];
        
        matches = input.match(regex);

        output.innerHTML += "Result From Test " + i + ":<br>" + JSON.stringify(matches) + "<br>";
    }
}

// Option 2: use string methods