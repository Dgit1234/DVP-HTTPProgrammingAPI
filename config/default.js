module.exports = { 
  "Freeswitch" : {
  "ip": 'localhost',
  "port": 8021,
  "password": 'devadmin'
  },

 "WebAPI" : {
      "domain": '192.168.1.35',
      "port": 80,
      "path": '/CSRequestWebApi/api/'
      },

"Redis" : {
    "ip": '127.0.0.1',
    "port": 6379
    },

"HTTPServer" : {
    "port": 8086
    },


"LBServer" : {
    "path": 'http://127.0.0.1:8086/'
    },


"Services": {

    "uploadurl": 'http://upload.duovoice.com',
    "downloaddurl": 'http://download.duovoice.com',
    "ruleservice": 'http://rule.duovoice.com'


    }



};