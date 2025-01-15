import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const main = async () => {
  // const getAllFromDb = await prisma.post.findMany();
  // const findFirst = await prisma.post.findFirstOrThrow({
  //   where: {
  //     id: 1,
  //   },
  // });
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 7,
    },
    select: {
      title: true,
      content: true,
      author: true,
    },
  });
  console.log({ findUnique });
};
main();
