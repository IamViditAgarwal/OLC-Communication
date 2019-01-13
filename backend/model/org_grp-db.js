var org_grp = {

};

org_grp.setSQL = function (sqlObject, sqlHelperObject) {
    this.mysql = sqlObject;
    this.sqlHelper = sqlHelperObject;
};

module.exports = org_grp;