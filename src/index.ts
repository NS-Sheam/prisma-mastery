import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is a test post 3",
  //       content: "This is a test post content 3",
  //       author: "Nazmus Sakib",
  //     },
  //   });
  //   console.log(result);

  // const getAllFromDB = await prisma.post.findMany();
  const deletePost = await prisma.post.delete({
    where: {
      id: 4,
    },
  });
};

main();
