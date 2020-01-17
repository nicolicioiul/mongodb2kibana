db.auth('root', 'pass-123')
db.createCollection('db_name');
db = db.getSiblingDB('db_name')

db.createUser({
    user: 'pastime',
    pwd: 'pastime123',
    roles: [
        {
            role: 'readWrite',
            db: 'db_name'
        }
    ]
})

db.incidents.createIndex({INCIDENT_NUMBER:1}, {unique:true});