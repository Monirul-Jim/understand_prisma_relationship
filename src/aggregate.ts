import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const aggregate = async () => {
  const abgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });
  console.log(countAge);
};

aggregate();
