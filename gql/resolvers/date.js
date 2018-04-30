module.exports = {
  members: date => date.getUsers(),
  memberCount: async date => {
    const users = await date.getUsers();
    return users.length
  },
  votes: date => date.getVotes(),
  voteCount: async date => {
    const votes = await date.getVotes();
    return votes.length
  }
}
