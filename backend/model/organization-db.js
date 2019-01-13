var organization = {
    tablename : "organization",
    name : "name",
    org_grp : "org_grp",
    org_code : "org_code"
};

organization.setSQL = function (sqlObject, sqlHelperObject) {
    this.mysql = sqlObject;
    this.sqlHelper = sqlHelperObject;
};

organization.getRecord = function (searchObj,callback) {
    
};

module.exports = organization;