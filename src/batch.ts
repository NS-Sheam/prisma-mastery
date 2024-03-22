import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "sakibSheam",
      email: "sheam@gmail.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 4,
    },
    data: {
      age: 30,
    },
  });

  const [userData, updateData] = await prisma.$transaction([createUser, updateUser]);
  console.log(userData, updateData);
};
batchTransaction();
