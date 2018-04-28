
const doNumTimes = (times, func) => {
  const results = [];
  while (n--) {
    results.push(func())
  }
  return results;
}


// Confirms that the user is logged in
const userIsLoggedIn = (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error('Unauthorized');
  }
}

// Confirms that the user is an admin
const userIsAdmin = (req, res) => {
  userIsLoggedIn(req, res);
  if (!req.user.isAdmin)  {
    res.status(403);
    throw new Error('Forbidden');
  }
}

// Confirms that the user (stored in req.user) can edit the todoList which
// corresponds to todoListId. If so, returns that todoList.
const userCanEditDate = async (req, res, dateId) => {
  userIsLoggedIn(req, res);
  const date = await Date.findById(dateId, {
    include: [{
      model: User,
      as: 'users',
      required: false,
      through: { attributes: [] },
    }],
  });
  if (!date) {
    res.status(404);
    throw new Error('Not Found');
  }
 if (!req.user.canEditDate(date)) {
    res.status(403);
    throw new Error('Forbidden');
  }
  return date;
}

// Confirms that the user (stored in req.user) can edit the todoTask which
// corresponds to todoTaskId. If so, this returns that todoTask.
const userCanEditVote = async (req, res, voteId) => {
  userIsLoggedIn(req, res);
  const vote = await Vote.findById(voteId);
  if (!vote) {
    res.status(404);
    throw new Error('Not Found');
  }
  if (!req.user.canEditDate(date)) {
    res.status(403);
    throw new Error('Forbidden');
  }
  return date;
}

module.exports = {
  userIsLoggedIn,
  userIsAdmin,
  doNumTimes,
}
