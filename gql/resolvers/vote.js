module.exports = {
  date: async vote => await vote.getDate(),
  user: async vote => await vote.getUser()
}
