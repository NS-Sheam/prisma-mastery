import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  // average age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });
  // sum of age
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });
  // count of age
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });
  // find number of records
  const countData = await prisma.user.count();

  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });
  const countPostTitle = await prisma.post.aggregate({
    _count: {
      title: true,
    },
    where: {
      published: true,
    },
  });
  console.log(countPostTitle);
};

aggregates();
