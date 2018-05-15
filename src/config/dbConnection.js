const mysql = require('mysql2');


module.exports=()=>{
  return mysql.createConnection({
    host: 'localhost',
    user: 'sapanam',
    password: '',
    database: 'panam_db',
    /*authSwitchHandler: function ({pluginName, pluginData}, cb) {
      if (pluginName === 'caching_sha2_password') {
        getPrivateKey(function (key) {
          var response = encrypt(key, pluginData);
          // continue handshake by sending response data
          // respond with error to propagate error to connect/changeUser handlers
          cb(null, response);
        });
      } else {
          console.log(`Unknown AuthSwitchRequest plugin name ${pluginName}`)
      //  const err = new Error(`Unknown AuthSwitchRequest plugin name ${pluginName}`);
      //  err.fatal = true;
      //  cb(err);
      }
    }*/
  })//;
}

/*
const sql2 = require('mssql');
 
module.exports=()=>{
 // async () => {
  const sql2 = require('mssql');
      try 
      {   const pool = new sql.ConnectionPool({
              user: 'sa',
              password: 'Panam2014',
              server: 'APOLO',
              database: 'DBSip15'
          })
          pool.connect(err => {
            console.log('Err2 '+err)
        })
      //    const pool = sql2.connect('mssql://sa:Panam2014@apolo/DBSip15')
          const result = sql2.query`select * from DAFij3ADep where DAFijCod = 1`
          console.dir(result)
      } catch (err) {
          console.log('Err '+err)
          // ... error checks
      }
   // }
  }*/
