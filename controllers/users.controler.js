const User = require("../models/User");
const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  await post.save();
  res.send('Post créé avec succès');
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.send('Post supprimé avec succès');
};


exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Fonction pour obtenir tous les utilisateurs
exports.getAllUsers = (req, res) => {
  res.send("Récupération de tous les utilisateurs");
};

// Fonction pour obtenir un utilisateur par ID
exports.getUserById = (req, res) => {
  res.send(`Récupération de l'utilisateur avec l'ID ${req.params.id}`);
};
