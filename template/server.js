const http = require("http");
const PORT = 5000;
const fs   = require("fs");
const path = require("path");

const mime_types = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.mp3': 'audio/mp3',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm',
}

function static_file(res, file_path, ext) {
    res.setHeader("Content-Type", mime_types[ext]);

    fs.readFile("./public" + file_path, (error, resultat) => {
        if(error) {
            res.statusCode = 505;
            res.end();
            console.log("Չկա");
        }

        res.end(resultat);
    });
    
}

http.createServer((req, res) => {
    const URL = req.url;

    function page_1 () { static_file(res, "/home.html", ".html" ) }
    function page_2 () { static_file(res, "/shop.html", ".html" ) }
    function page_3 () { static_file(res, "/about.html", ".html" ) }
    function page_4 () { static_file(res, "/services.html", ".html" ) }
    function page_5 () { static_file(res, "/blog.html", ".html" ) }

    switch(URL) {
        case "/"         : page_1() ; break;
        case "/shop"     : page_2() ; break;
        case "/about"    : page_3() ; break;
        case "/services" : page_4() ; break;
        case "/blog"     : page_5() ; break;
        default  : {
            const ext_name = String(path.extname(URL)).toLocaleLowerCase();
            
            if(ext_name in mime_types) {
                static_file(res, URL, ext_name)
            }
            else {
                res.statusCode = 505;
                res.end();
                console.log("Չկա");
            }
            
        }; break;
    }

}).listen(PORT);

// http://localhost:5000
