const UserService = (userRepository, jwt) => {
  const signIn = (username, password) => {
    const user = userRepository.findByUsername(username);
    if (!user) return null;
    if (!user.checkPassword(password)) return null;
  };
};

module.exports = UserService;
