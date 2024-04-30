import BookModel from '../models/Book.js';
import AppError from '../errors/AppError.js';

class Book {
  async getAll(req, res, next) {
    try {
      const books = await BookModel.getAll();
      res.json(books);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  async getOne(req, res, next) {
    try {
      if (!req.params.id) {
        throw new Error('Не указан id книги');
      }
      const book = await BookModel.getOne(req.params.id);
      res.json(book);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  async create(req, res, next) {
    try {
      const book = await BookModel.create(req.body);
      res.json(book);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  async update(req, res, next) {
    try {
      if (!req.params.id) {
        throw new Error('Не указан id книги');
      }
      const book = await BookModel.update(req.params.id, req.body);
      res.json(book);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  async delete(req, res, next) {
    try {
      if (!req.params.id) {
        throw new Error('Не указан id книги');
      }
      const book = await BookModel.delete(req.params.id);
      res.json(book);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }
}

export default new Book();
