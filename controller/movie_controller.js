const User = require('../models/User')

const getAllMovies = async (req, res) => {
  const users = await User.findAll();

  res.json(users);
};

const addMovie = async (req, res) => {
  const { name, surname } = req.body;

  const createdUser = await User.create({
    name,
    surname
  });

  res.json(createdUser)
};

const getOneMovie = async (req, res) => {
  const { id } = req.params;

  const user = await User.findAll({
    where: { id }
  });

  res.json(user);
};

const updateMovie = async (req, res) => {
  const id = req.params.id;

  await User.update(req.body, {
    where: { id }
  });

  res.json('User has been updated')
}

const deleteMovie = async (req, res) => {
  const id = req.params.id;

  await User.destroy({
    where: { id }
  });

  res.json('User was deleted')
}


module.exports = {
  addMovie,
  deleteMovie,
  getAllMovies,
  getOneMovie,
  updateMovie
}