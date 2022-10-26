const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: 'localhost',
    port: 3006,
    database: 'test',
    user: 'application',
    password: 'application',
    connectionLimit: 4
});
const getConnection = async() => {
    return await pool.getConnection();
}
exports.executeQuery = async(sql, params)=>{
    let conn, rows=null;
    try{
        conn = await getConnection();
        if(params)
            rows = await conn.query(sql, params);
        else
            rows = await conn.query(sql);
    } catch(err) {
        console.log(err);
    }finally{
        if(conn) conn.end();
    }
    return rows;
}