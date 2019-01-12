var mysql = require('mysql');
var mysqlHelper = require('./mysql-helper');

model = {};

// ----- DB table | Start | -----
model.locationdata = function () {
    var locationdata = require('./locationdata-db');
    locationdata.setSQL(mysql, mysqlHelper);
    return locationdata;
};

model.organization = function () {
    var organization = require('./organization-db');
    organization.setSQL(mysql, mysqlHelper);
    return organization;
};

model.org_grp = function () {
    var org_grp = require('./locationdata-db');
    org_grp.setSQL(mysql, mysqlHelper);
    return org_grp;
};
// ----- DB table | Stop | -----

module.exports = model;