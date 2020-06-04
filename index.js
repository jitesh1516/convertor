var express = require('express');
var fs = require('fs');
var app = express();

var str = '';
app.get('/', function (req, res) {
    fs.readFile(process.cwd() + "/input_user_story_1.txt", "ascii", function (err, data) {
        data.split("\n\n").forEach(function (element) {
            str += '\n' + asciiToNumber(element);
        });
    });
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});



function asciiToNumber(input) {
    try {
        return input.
        split('\n').
        reduce(function (r, a, i) {
            a.match(/.../g).forEach(function (b, j) {
                r[j] = r[j] || [];
                r[j][i] = b;
            });
            return r;
        }, []).
        map(function (a) {
            return a.join('');
        }).
        map(function (a) {
            var bits = {
                    63: 0,
                    6: 1,
                    91: 2,
                    79: 3,
                    102: 4,
                    109: 5,
                    125: 6,
                    7: 7,
                    127: 8,
                    111: 9,
                    0: ' '
                },
                v = '909561432'.split('').reduce(function (r, v, i) {
                    return r + ((a[i] !== ' ') << v);
                }, 0);
            return v in bits ? bits[v] : '*'; // * is an illegal character
        }).
        join('');
    } catch (error) {
        fs.writeFileSync(process.cwd() + "/output_user_story_1.txt", str)
    };
}