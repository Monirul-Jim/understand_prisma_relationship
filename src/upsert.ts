import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const main = async () => {
  const upsertData = await prisma.post.upsert({
    where: { id: 7 },
    update: {
      title: "Updated title",
    },
    create: {
      title: "title 4",
      content: "content 4",
    },
  });
  console.log(upsertData);
};
main();
