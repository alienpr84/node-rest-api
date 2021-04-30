db.createUser({
  user: 'restful',
  pwd: 'restful123',
  roles: [
    {
      role: 'readWrite',
      db: 'restfulDB'
    }
  ]
});