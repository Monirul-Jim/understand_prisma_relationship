import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is Title 2",
  //       content: "This is content2",
  //       author: "Jim",
  //     },
  //   });
  const getAllFromDb = await prisma.post.findMany();
  console.log(getAllFromDb);
};
main();
