import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db.psklgxqhdbckhjoymtho.supabase.co",
    port: 5432,
    username: "postgres",
    password: "EinsteinE13@@88",
    database: "postgres",
    entities: [
        "../../entities/*.ts"
    ],
    migrations: [
        "./src/database/migrations/*.ts"
    ]
});

AppDataSource.initialize()
    .then(() => {
        console.log("==== | CONNECTED TO DATABASE | ====")
    })
    .catch((err) => {
        console.log("==== | DATABASE NOT FOUND | ==== : " + err)
    })