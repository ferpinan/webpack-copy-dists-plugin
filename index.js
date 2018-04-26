'use strict'

const fs = require('fs-extra');

class CopyDists {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    apply(compiler) {
        compiler.plugin('done', compilation => {
            fs.readdir(this.from, (err, files) => {
                files.forEach(file => {
                    var filePathFrom = this.from + "/" + file;

                    for(var i in this.to){
                        var filePathTo = this.to[i] + "/" + file;

                        fs.copy(filePathFrom, filePathTo)
                        // .then(() => console.log('success!'))
                            .catch(err => console.error(err))
                    }
                });
            });
        })
    }
}

module.exports = CopyDists;
