import SQLite from 'react-native-sqlite-storage';

const databaseName='GallryApp.db';
const databaseVersion ='1.0';
const databaseDisplayName ='Gallery App Database';
const databaseSize= 200000;

const db= SQLite.openDatabase(
    databaseName,
    databaseVersion,
    databaseDisplayName,
    databaseSize
);

db.transaction((tx)=>{
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Images(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            uri TEXT,
            latitude REAL,
            longitude REAL,
            timestamp DATETIME
        )
        `,
        [],
        ()=>{
            console.log('TABLE CREATED SUCCESSFULLY');
        },
        (_ , error)=>{
            console.error('errpr creating table', error);
        }
    );
});
export const insertImage=(path, latitude, longitude)=>{
    db.transaction((tx)=>{
        tx.executeSql(
        'INSERT INTO Images (path , latitude, longitude) VALUES (?, ?, ?)',
        [path, latitude, longitude],
        ()=>{
            console.log('Image loaded successfully');
        },
        (error)=>{
            console.error('Error loading image ', error);
        }
        );
    });
};

export const fetchImages =(callback)=>{
    bd.transaction((tx)=>{
        tx.executeSql(
            'SELECT * FROM Images',
            [],
            (_ ,{rows})=>{
                const images = rows.raw();
                callback(images);
            },
            (error)=>{
                console.error('error fetching images', error);
            }
        );
    });
};
export default db;
