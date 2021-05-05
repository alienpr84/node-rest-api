print('\n########### Creating Databases, Users and Collections ###########\n')

db = db.getSiblingDB('dev_restfulDB')
db.createUser({
  user: 'dev_restful',
  pwd: 'devRestful123',
  roles: [
    {
      role: 'readWrite',
      db: 'dev_restfulDB'
    }
  ]
});
db.createCollection('categories');
db.createCollection('products');
db.createCollection('users');

db = db.getSiblingDB('test_restfulDB')
db.createUser({
  user: 'test_restful',
  pwd: 'testRestful123',
  roles: [
    {
      role: 'readWrite',
      db: 'test_restfulDB'
    }
  ]
});
db.createCollection('categories');
db.createCollection('products');
db.createCollection('users');

print('\n###################### End\n')