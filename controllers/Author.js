import AuthorModel from '../models/Author.js';
import AppError from '../errors/AppError.js';

class Author {
  async getAll(req, res, next) {
    try {
      const authors = await AuthorModel.getAll();
      res.json(authors);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  async getOne(req, res, next) {
    try {
      if (!req.params.id) {
        throw new Error('Не указан id автора');
      }
      const author = await AuthorModel.getOne(req.params.id);
      res.json(author);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  async create(req, res, next) {
    try {
      const author = await AuthorModel.create(req.body);
      res.json(author);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  async update(req, res, next) {
    try {
      if (!req.params.id) {
        throw new Error('Не указан id автора');
      }
      const author = await AuthorModel.update(req.params.id, req.body);
      res.json(author);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  async delete(req, res, next) {
    try {
      if (!req.params.id) {
        throw new Error('Не указан id автора');
      }
      const author = await AuthorModel.delete(req.params.id);
      res.json(author);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }
}

export default new Author();
