const express = require('express');
const mysql = require('mysql');
 const con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password:"",
        database : ""
    }
)
module.exports = con
