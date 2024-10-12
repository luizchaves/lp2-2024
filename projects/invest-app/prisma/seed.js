import { PrismaClient } from '@prisma/client';
import User from '../src/models/User.js';

const prisma = new PrismaClient();

const categories = [
  {
    name: 'Pós',
    color: '#6366f1',
  },
  {
    name: 'Pré',
    color: '#d946ef',
  },
  {
    name: 'IPCA',
    color: '#f43f5e',
  },
  {
    name: 'Renda Variável',
    color: '#eab308',
  },
  {
    name: 'Fundo de Investimento',
    color: '#46efb1',
  },
  {
    name: 'Outros',
    color: '#111111',
  },
];

async function main() {
  await prisma.category.createMany({
    data: categories,
  });

  await User.create({
    name: 'Admin',
    email: 'admin@email.com',
    password: 'admin',
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
