var locationdata = {
    tablename: 'locationdata',
    id: 'id',
    locationcode: 'locationcode',
    organization: 'organization',
    org_group: 'org_group',
    message: 'message'
};

locationdata.setSQL = function (sqlObject, sqlHelperObject) {
    this.mysql = sqlObject;
    this.sqlHelper = sqlHelperObject;
};

locationdata.getlocationdata = function (id, callback) {
    let promise = new Promise(async (resolve, reject) => {
        try {
            let mysql = this.mysql;
            let sql = this.sqlHelper;
            let sqlQuery = mysql.format("SELECT * FROM locationdata ORDER BY id DESC");
            let data = await sql.querySQLSync(sqlQuery);
            // console.log(data);
            return resolve(data);
        } catch (error) {
            return reject(error);
        }
    });
    if (typeof (callback) == 'function') {
        promise.then((data) => {
            return callback(data, null);
        }).catch((error) => {
            return callback(null, error);
        });
    }
    return promise;
};

locationdata.setlocationdata = function (locationcode, message, organization, phoneNo, callback) {
    let promise = new Promise(async (resolve, reject) => {
        try {
            let mysql = this.mysql;
            let sql = this.sqlHelper;
            let sqlQuery = mysql.format("INSERT INTO " + this.tablename + "(locationcode,organization,org_group,pnumber,message) VALUES('" + locationcode + "','" + organization + "'," + 1 + ",'" + phoneNo + "','" + message + "')");
            let data = await sql.querySQLSync(sqlQuery);
            return resolve(data);
        } catch (error) {
            return reject(error);
        }
    });
    if (typeof (callback) == 'function') {
        promise.then((data) => {
            return callback(data, null);
        }).catch((error) => {
            return callback(null, error);
        });
    }
    return promise;
};

module.exports = locationdata;