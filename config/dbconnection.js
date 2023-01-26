const mysql = require("mysql")

const {host,password,user,database} = require("./config")

const {MYSQL_ADDON_HOST,MYSQL_ADDON_DB,MYSQL_ADDON_USER,MYSQL_ADDON_PORT,MYSQL_ADDON_PASSWORD,MYSQL_ADDON_URI} = require("./config")

module.exports = () =>{
    return mysql.createConnection(
        {
            host:MYSQL_ADDON_HOST,
            user:MYSQL_ADDON_USER,
            password:MYSQL_ADDON_PASSWORD,
            database:MYSQL_ADDON_DB,
            port:MYSQL_ADDON_PORT
        }
    )
} 