import { Author as AuthorMapping } from './mapping.js';

class Author {
  async getAll() {
    const authors = await AuthorMapping.findAll();
    return authors;
  }

  async getOne(id) {
    const author = await AuthorMapping.findByPk(id);
    if (!author) {
      throw new Error('Автор не найден в БД');
    }
    return author;
  }

  async create(data) {
    const { email, name } = data;
    const author = await AuthorMapping.create({ email, name });
    return author;
  }

  async update(id, data) {
    const author = await AuthorMapping.findByPk(id);
    if (!author) {
      throw new Error('Автор не найден в БД');
    }
    const { email = author.email, name = author.name } = data;
    await author.update({ email, name });
    return author;
  }

  async delete(id) {
    const author = await AuthorMapping.findByPk(id);
    if (!author) {
      throw new Error('Автор не найден в БД');
    }
    await author.destroy();
    return author;
  }
}

export default new Author();
