import { config } from 'dotenv';
import { PrismaClient } from '@prisma/client';
import type { AuthorType } from './types';

config({ path: '.env.development' });
const prisma = new PrismaClient();

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
