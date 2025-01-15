import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const main = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 6,
  //     },
  //     data: {
  //       title: "Title 6",
  //       content: "content 6",
  //       author: "author 4",
  //     },
  //   });
  const updateMany = await prisma.post.updateMany({
    where: {
      title: "Title 2",
    },
    data: {
      published: true,
    },
  });
  console.log(updateMany);
};
main();
