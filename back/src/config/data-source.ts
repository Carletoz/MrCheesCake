import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "srcheesecake",
    synchronize: true,
    logging: true,
    dropSchema: false,
    entities: [],
    
});
