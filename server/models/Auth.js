class Auth {
    constructor(db) {
        this.db = db;
        this.md5 = require('md5');
    }
    
    createCookies(req, res) {
        var Cookies = require('cookies');
        var keys = ['defcDefsaJuybG3232']
        this.cookies = new Cookies(req, res, { keys: keys })
    }
    
    signupDb(dbc, userObj) {
        return new Promise(function(resolve, reject) {
            dbc.collection("users").insertOne(userObj, function(err, res) {
                if (err) {
                    resolve({"res" : "NOK"}); 
                }
                resolve({"res" : "OK"}); 
            });  
        });
    }
    
    getUsersDb(dbc) {
        return new Promise(function(resolve, reject) {
            dbc.collection("users").find({}).toArray(function(err, result) {
                if (err) {
                    reject("ERROR");
                }
                resolve(result);
            });
            
        });
    }
    
    checkUserDb(dbc, req) {
        return new Promise(function(resolve, reject) {
            dbc.collection("users").find({"email" : req.email, "password" : req.password}).toArray(function(err, result) {
                if (err) {
                    reject("ERROR");
                }
                
                if (result.length === 0) {
                    resolve({"res" : "NOK", "userData" : {}}); 
                } else {
                    resolve({"res" : "OK", "userData" : result[0]});  
                }
            });
        });
    }
    
    createSession(dbc, userData) {
        var newSessionId = this.md5(Math.random());
        return new Promise(function(resolve, reject) {
            dbc.collection("sessions").insertOne({"userId" : userData._id, "sessionId" : newSessionId}, function(err, res) {
                if (err) {
                    resolve({"res" : "NOK"}); 
                }
                resolve({"res" : "OK", "sessionId" : newSessionId}); 
            });  
        });
    }
    
    setSessionCookie(sessionId) {
        this.cookies.set('sessionId', sessionId, {signed: true});
    }
    
    async validate() {
        let dbc = await this.db.getDb();
        var sessionId = this.cookies.get('sessionId', {signed: true});
        return new Promise(function(resolve, reject) {
            dbc.collection("sessions").find({"sessionId" : sessionId}).toArray(function(err, result) {
                if (err) {
                    reject({"sessionId" : ""});
                }
                
                if (result.length === 0) {
                    resolve({"sessionId" : ""}); 
                } else {
                    resolve({"sessionId" : sessionId});  
                }
            });
        });
    }
    
    async login(req) {
        if (req.body.email === '' || req.body.password === '') {
            return {"res" : "NOK", "userData" : {}};
        }
        let dbc = await this.db.getDb();
        let ret = await this.checkUserDb(dbc, {"email" : req.body.email, "password" : this.md5(req.body.password)});
        
        if (ret.res === 'NOK') {
          return ret;
        } else {
          ret = await this.createSession(dbc, ret.userData);
          this.setSessionCookie(ret.sessionId);
        }
        return ret;
    }
    
    async signup(req) {    
        let dbc = await this.db.getDb();
        let ret = await this.signupDb(dbc, {"email" : req.body.email, "password" : this.md5(req.body.password), "fullName" : req.body.fullName});
        return ret;
    }
    
    async logout(req) {
        this.setSessionCookie("");
        return {"res" : "OK"}
    }
}

module.exports = Auth;