const User = require("./user");

const users = [
  { username: "user1", password: "111" },
  { username: "user2", password: "222" }
];

const UserRepository = () => {
  return {
    findByUsername(username) {
      const user = users.find(u => u.username === username);
      if (!user) return null;
      return User(user.username, user.password);
    }
  };
};

module.exports = UserRepository;
