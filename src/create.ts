import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "This is a test post 1",
        content: "This is a test post content 1",
        author: "Nazmus Sakib",
      },
      {
        title: "This is a test post 2",
        content: "This is a test post content 2",
        author: "Nazmus Sakib",
      },
      {
        title: "This is a test post 3",
        content: "This is a test post content 3",
        author: "Nazmus Sakib",
      },
    ],
  });
  console.log(createMany);
};

main();
