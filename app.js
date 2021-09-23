var fs = require('fs')
var jokes = require('./jokes.json')
async function main() {
    try {
        var word = process.argv[2]
        var joke = ""
        var count = 0;
        console.log(word)
        for (var i = 0; i < jokes.length; i++) {
            if (jokes[i].joke.toLowerCase().includes(word.toLowerCase())) {
                jokes[i].count = jokes[i].count+1;
                if (count <= jokes[i].count) {
                    joke = jokes[i].joke;
                    count = jokes[i].count;
                }
            }
        }
        fs.writeFileSync('./jokes.json', JSON.stringify(jokes, null,1));
        if (joke != "") {
            console.log(joke)
        }
        else {
            console.log("no jokes were found")
        }
        console.log("all done")
    }

    catch (err) {
        console.log(err)
    }
}
main()