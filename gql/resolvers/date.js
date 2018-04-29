module.exports = {
  members: async date => await date.getUsers(),
  votes: async date => await date.getVotes(),
}
