module.exports = {
  date: async vote => await vote.getDate(),
}


// module.exports = {
//   date: async (vote, __, { req, res, models: { Date } }) => {
//     return await Date.findById(vote.dateId)
//   },
// }
