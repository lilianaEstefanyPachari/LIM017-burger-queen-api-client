module.exports = function() {
  let data = {
    users : [{
      id: 01,
      email: 'juan@gmail.com',
      password: '123',
      roles: {
        admin: true,
      }
    },
    {
      id: 02,
      email: 'maria@gmail.com',
      password: '1234',
      roles: {
        admin: false,
      }
    },
    {
      id: 03,
      email: 'lola@gmail.com',
      password: '12345',
      roles: {
        admin: false,
      }
    }]
  }
  return data;
}
