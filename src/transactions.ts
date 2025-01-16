import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const transaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "monirul1",
      email: "monirul1@gmail.com",
    },
  });
  const updateUser = prisma.user.update({
    where: {
      id: 5,
    },
    data: {
      age: 30,
    },
  });
  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);
  console.log(createUser);
  console.log(updateUser);
};
transaction();
