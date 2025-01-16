import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const group = async () => {
  const groupPost = await prisma.post.groupBy({
    by: ["published", "authorId"],
  });
  console.log(groupPost);
};
group();
