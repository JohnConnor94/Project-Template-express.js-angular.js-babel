const fs = require('fs');
const path = require('path');
const babel = require("@babel/core");

const SRCDIR = path.join(__dirname, './client');
const OUTDIR = path.join(__dirname, './dist');

const trans_options = {
    // non è installato il plugin
    // "plugins": ["@babel/plugin-transform-strict-mode"],
    "presets": [
        [
            "@babel/env", {
                "targets": {
                    "browsers": [
                        "last 2 versions",
                        "IE >= 9"
                    ]
                }
            }
        ]
    ],
    "sourceMaps": true,
    // "comments": false // per rimuovere i commenti 
}

/**
 * Create the directory tree if it doesn't exist
 * @param {*} filePath 
 */
function ensureDirectoryExistence(filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

/**
 * Compile the file using babel
 * @param {*} filepath filepath to compile
 */
function compile(filepath) {

    let extension = path.extname(filepath);
    let options = trans_options;

    let js_flag = extension == '.js';

    if (js_flag) {
        // JAVASCRIPT TO COMPILE
        let src = filepath;
        let out = filepath.replace(SRCDIR, OUTDIR);
        out = path.resolve(out, './');

        ensureDirectoryExistence(out);

        babel.transformFile(src, options, (err, result) => {
            if (err)
                return console.log("Compilation error", err);
            fs.writeFileSync(out, result.code.slice(13) + "\r\n//# sourceMappingURL=" + filepath + ".map\n");
            fs.writeFileSync(out + ".map", JSON.stringify(result.map, null, 2));
            console.log("Compiled script", filepath);
        });
    }
}

function copyToDist(filepath) {
    let src = filepath;
    let out = filepath.replace(SRCDIR, OUTDIR);
    out = path.resolve(out, './');

    ensureDirectoryExistence(out);

    fs.copyFileSync(src, out);
}

// compile each file in directory client
let folders = fs.readdirSync(SRCDIR, { recursive: true });

const excludedFolders = ["styles", "lib"];

// filtering folders and html and css files
folders = folders.filter(x => {
    let flag = true;
    excludedFolders.forEach(y => {
        if (x == y || path.extname(x) == ".html" || path.extname(x) == ".css")
            flag = false;
    });
    return flag;
});

folders = folders.map(x => x = path.join(SRCDIR, x))

// compile each file for each folder
folders.forEach(folder => {
    files = fs.readdirSync(folder);
    files.forEach(file => {
        file = path.join(folder, file);
        compile(file);
    })
})

// copy ./lib, ./styles and index.html in dist
folders = excludedFolders.map(x => x = path.join(SRCDIR, x));

folders.forEach(folder => {
    files = fs.readdirSync(folder);
    files.forEach(file => {
        file = path.join(folder, file);
        copyToDist(file);
    })
})

copyToDist(path.join(SRCDIR, 'index.html'));