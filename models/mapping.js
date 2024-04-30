import sequelize from '../sequelize.js';
import database from 'sequelize';

const { DataTypes } = database;

const Author = sequelize.define('author', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Book = sequelize.define('book', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true },
  price: { type: DataTypes.INTEGER },
});

Author.hasMany(Book, { as: 'books', onDelete: 'CASCADE' });
Book.belongsTo(Author);

export {
  Author,
  Book
}