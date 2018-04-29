module.exports = {
  dates: async (user, __, { req, res, models: { UserDate, Date } }) => {
    const datess = await UserDate.findAll({where: {userId: user.id}});

    const findActualDates = async (arr) => {
      const dateArr = [];
      for (let date of arr) {
        const foundDate = await Date.findById(date.dateId)
        dateArr.push(foundDate);
      }
      return dateArr;
    }
    return await findActualDates(datess);
  },
}
