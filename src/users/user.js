function User(username, password) {
  const getUesrname = () => username;
  const checkPassword = p => p === password;

  return {
    getUesrname,
    checkPassword
  };
}

module.exports = User;
