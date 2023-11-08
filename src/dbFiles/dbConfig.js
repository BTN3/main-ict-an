require('dotenv').config()
const config = {
user: process.env.REACT_APP_SQL_USER,
password: process.env.REACT_APP_SQL_PASS,
server:process.env.REACT_APP_SQL_SERVER_NAME,
database:process.env.REACT_APP_SQL_DB,
options:{
    trustServerCertificate:true,
    trustedConnection:false,
    enableArithAbort:true,
    instancename:'MSSQLSERVER'
}

}
module.exports = config;