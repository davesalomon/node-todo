import pg from 'pg';

class Db {
    private _conn: pg.Connection | null

    get conn() {
            if (!this._conn) {
                this._conn = new pg.Connection({
                    user: 'postgres',
                    password: 'postgres',
                    database: 'todo-list',
                    port: 5432,
                    host: 'localhost'
                })
            }
        return this._conn
    }
}

