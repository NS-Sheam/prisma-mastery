import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const getAllFromDB = await prisma.post.findMany();
  const deletePost = await prisma.post.delete({
    where: {
      id: 4,
    },
  });
};

main();
