const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Review = sequelize.define("review", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  info: { type: DataTypes.TEXT, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const UserRating = sequelize.define("userRating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userRating: { type: DataTypes.INTEGER, defaultValue: 0 },
  userId: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});

User.hasMany(Review);
Review.belongsTo(User);

Type.hasMany(Review);
Review.belongsTo(Type);

Review.hasMany(UserRating);
UserRating.belongsTo(Review);

module.exports = { User, Type, Review, UserRating };
