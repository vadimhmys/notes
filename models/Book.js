import { Book as BookMapping } from './mapping.js';

class Book {
  async getAll() {
    const books = await BookMapping.findAll();
    return books;
  }

  async getOne(id) {
    const book = await BookMapping.findByPk(id);
    if (!book) {
      throw new Error('Книга не найдена в БД');
    }
    return book;
  }

  async create(data) {
    const { title, price, authorId } = data;
    const book = await BookMapping.create({ title, price, authorId });
    return book;
  }

  async update(id, data) {
    const book = await BookMapping.findByPk(id);
    if (!book) {
      throw new Error('Книга не найдена в БД');
    }
    const { title = book.title, price = book.price } = data;
    await book.update({ title, price });
    return book;
  }

  async delete(id) {
    const book = await BookMapping.findByPk(id);
    if (!book) {
      throw new Error('Книга не найдена в БД');
    }
    await book.destroy();
    return book;
  }
}

export default new Book();
