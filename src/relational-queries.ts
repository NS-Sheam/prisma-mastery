import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  const result = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      post: true,
      profile: true,
    },
  });
  console.log(result);
};
relationalQueries();
