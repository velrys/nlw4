import { Connection, createConnection, getConnection, getConnectionOptions} from "typeorm";

//createConnection();

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions()
    return createConnection(
        Object.assign(defaultOptions, {
            database:process.env.NODE_ENV === 'test' ? "./src/Database/database.test.sqlite" : defaultOptions.database
        })
    )
}