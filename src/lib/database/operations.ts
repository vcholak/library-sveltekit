import prisma from "./prisma";
import type { AuthorType, BookType } from "./types";

// Genre operations

export async function allGenres() {
  const genres = await prisma.genre.findMany();
  return genres;
}

export async function createGenre(title: string) {
  await prisma.genre.create({
    data: {
      title: title
    }
  });
}

// Author operations

export async function allAuthors() {
  const authors = await prisma.author.findMany();
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

// Book operations

export async function allBooks() {
  const books = await prisma.book.findMany();
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

// BookCopy operations

export async function allBookCopies() {
  const bookCopies = await prisma.bookCopy.findMany({
    include: {
      book: true
    }
  });
  return bookCopies;
}
