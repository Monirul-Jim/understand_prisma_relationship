import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const transaction = async () => {
  //? batch transaction
  //   const createUser = prisma.user.create({
  //     data: {
  //       username: "monirul1",
  //       email: "monirul1@gmail.com",
  //     },
  //   });
  //   const updateUser = prisma.user.update({
  //     where: {
  //       id: 5,
  //     },
  //     data: {
  //       age: 30,
  //     },
  //   });
  //   const [userData, updateData] = await prisma.$transaction([
  //     createUser,
  //     updateUser,
  //   ]);
  //   console.log(createUser);
  //   console.log(updateUser);
  // interactive transaction
  const result = await prisma.$transaction(async (tx) => {
    const getAllPost = await tx.post.findMany({
      where: {
        published: true,
      },
    });
    const countUser = await tx.user.count();
    const updateUser = await tx.user.update({
      where: {
        id: 7,
      },
      data: {
        age: 100,
      },
    });
    return { getAllPost, countUser, updateUser };
  });
  console.log(result);
};
transaction();
