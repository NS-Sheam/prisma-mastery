import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 5,
  //     },
  //     data: {
  //       id: 3,
  //       title: "This is a test post 3",
  //       content: "This is a test post content 3",
  //     },
  //   });
  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "This is a test post 2",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });
  const upsertData = await prisma.post.upsert({
    where: {
      id: 8,
    },
    update: {
      author: "Nazmus Sakib",
    },
    create: {
      title: "Title 1",
      content: "Content 1",
    },
  });

  console.log({ upsertData });
};

updates();
