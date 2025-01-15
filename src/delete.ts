import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const main = async () => {
  const singleDelete = await prisma.post.delete({
    where: {
      id: 10,
    },
  });
  // const manyDelete = await prisma.post.deleteMany({
  //     where: {
  //         published:false
  //     }
  // })
  console.log(singleDelete);
};
main();
