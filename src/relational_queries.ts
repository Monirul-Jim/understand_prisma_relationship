import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const relationalQueries = async () => {
  //   const result = await prisma.user.findUnique({
  //     where: {
  //       id: 3,
  //     },
  //     include: {
  //       post: true,
  //     },
  //   });
  // .post();
  //   const publishedPostUsers = await prisma.user.findMany({
  //     include: {
  //       post: {
  //         where: {
  //           published: true,
  //         },
  //       },
  //     },
  //   });
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "This",
          },
        },
      ],
    },
  });
  const startsWith = await prisma.user.findMany({
    where: {
      email: {
        // startsWith: "user1",
        // endsWith: "user1",
        equals: "user2@gmail.com",
      },
    },
  });

  const userNameArray = ["user1", "user2", "user5"];
  const userNamesByArray = await prisma.user.findMany({
    where: {
      //   username: "user2",
      username: {
        in: userNameArray,
      },
    },
  });
  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 3,
    },
    include: {
      post: {
        include: {
          //   postCategory: true,
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });
  console.log(inDepthData);
};
relationalQueries();
