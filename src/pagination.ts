import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const pagination = async () => {
  // offset pagination
  const offsetData = await prisma.post.findMany({
    skip: 5,
    take: 2,
  });
  // cursor based pagination
  const cursorData = await prisma.post.findMany({
    cursor: {
      id: 10,
    },
    skip: 5,
    take: 2,
  });
  const sortedData = await prisma.post.findMany({
    orderBy: {
      title: "desc",
    },
  });
  console.log(sortedData);
};
pagination();
