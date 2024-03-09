import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all data from the database
  const getAllFromDB = await prisma.post.findMany();
  // find first data from the database
  //   const findFirst = await prisma.post.findFirstOrThrow({
  //     where: {
  //       id: 10,
  //     },
  //   });

  // find unique data from the database
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 2,
    },
    select: {
      title: true,
    },
  });

  console.log({ findUnique });
};

main();
