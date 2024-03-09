import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  //   const offsetData = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //   });
  //   console.log({ offsetData });
  const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 20,
    },
  });
  //   console.log({ cursorData });

  const sortedData = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
    where: {
      title: "This is a test post 2",
    },
  });
  console.log({ sortedData });
};

paginationSorting();
