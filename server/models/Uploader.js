class Uploader {
    upload(req) {
        if (req.files == null) {
            return {"res" : "NOK", "err" : "No files..", "path" : ""};
        }
        var newName = './public/uploads/' + req.files.file1.name;
        req.files.file1.mv(newName, function(err) {
            if (err) {
                return {"res" : "NOK", "err" : err, "path" : ""};
            }
        });
        return {"res" : "OK", "err" : "", "path" : newName};
    }
}

module.exports = Uploader;