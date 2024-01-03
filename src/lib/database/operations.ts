import prisma from "./prisma";
import type { AuthorType, BookType, BookCopyType } from "./types";

// Genre operations

export async function countGernes() {
  const count = prisma.genre.count();
  return count;
}

export async function allGenres() {
  const genres = await prisma.genre.findMany();
  return genres;
}

export async function getGenre(id: string) {
  const genre = await prisma.genre.findUnique({
    where: {
      id
    }
  })
  return genre;
}

export async function getGenres(skip: number, take: number) {
  const genres = await prisma.genre.findMany({
    skip,
    take
  });
  return genres;
}

export async function createGenre(title: string) {
  await prisma.genre.create({
    data: {
      title
    }
  });
}

export async function updateGenre(id: string, title: string) {
  await prisma.genre.update({
    where: { id },
    data: {
      title
    }
  });
}

// Author operations

export async function countAuthors() {
  const count = prisma.author.count();
  return count;
}

export async function allAuthors() {
  const authors = await prisma.author.findMany();
  return authors;
}

export async function getAuthor(id: string) {
  const author = await prisma.author.findUnique({
    where: {
      id
    }
  })
  return author;
}

export async function getAuthors(skip: number, take: number) {
  const authors = await prisma.author.findMany({
    skip,
    take
  });
  return authors;
}

export async function createAuthor(payload: AuthorType) {
  await prisma.author.create({
    data: {
      firstName: payload.firstName,
      familyName: payload.familyName,
      birthDate: payload.birthDate,
      deathDate: payload.deathDate,
      lifeSpan: payload.lifeSpan
    }
  });
}

export async function updateAuthor(id: string, payload: AuthorType) {
  await prisma.author.update({
    where: { id },
    data: {
      firstName: payload.firstName,
      familyName: payload.familyName,
      birthDate: payload.birthDate,
      deathDate: payload.deathDate,
      lifeSpan: payload.lifeSpan
    }
  });
}

// Book operations

export async function countBooks() {
  const count = prisma.book.count();
  return count;
}

export async function allBooks() {
  const books = await prisma.book.findMany();
  return books;
}

export async function getBook(id: string) {
  const book = await prisma.book.findUnique({
    where: {
      id
    },
    include: {
      author: true
    }
  })
  return book;
}

export async function getBooks(skip: number, take: number) {
  const books = await prisma.book.findMany({
    skip,
    take
  });
  return books;
}

export async function createBook(payload: BookType) {
  await prisma.book.create({
    data: {
      title: payload.title,
      summary: payload.summary,
      isbn: payload.isbn,
      authorId: payload.authorId,
      genreId: payload.genreId,
    }
  });
}

export async function updateBook(id: string, payload: BookType) {
  await prisma.book.update({
    where: { id },
    data: {
      title: payload.title,
      summary: payload.summary,
      isbn: payload.isbn,
      authorId: payload.authorId,
      genreId: payload.genreId,
    }
  });
}

// BookCopy operations

export async function countBookCopies() {
  const count = prisma.bookCopy.count();
  return count;
}

export async function countAvailableBookCopies() {
  const count = prisma.bookCopy.count({
    where: {
      NOT : {
        dueBack: null
      }
    }
  });
  return count;
}

export async function allBookCopies() {
  const bookCopies = await prisma.bookCopy.findMany({
    include: {
      book: true
    }
  });
  return bookCopies;
}

export async function getBookCopy(id: string) {
  const bookCopy = await prisma.bookCopy.findUnique({
    where: {
      id
    },
    include: {
      book: {
        include: {
          author: true
        }
      }
    }
  })
  return bookCopy;
}

export async function getBookCopies(skip: number, take: number) {
  const bookCopies = await prisma.bookCopy.findMany({
    skip,
    take,
    include: {
      book: true
    }
  });
  return bookCopies;
}

export async function createBookCopy(payload: BookCopyType) {
  await prisma.bookCopy.create({
    data: {
      bookId: payload.bookId,
      imprint: payload.imprint,
      status: payload.status,
      dueBack: payload.dueBack
    }
  });
}

export async function updateBookCopy(id: string, payload: BookCopyType) {
  await prisma.bookCopy.update({
    where: { id },
    data: {
      bookId: payload.bookId,
      imprint: payload.imprint,
      status: payload.status,
      dueBack: payload.dueBack
    }
  });
}
