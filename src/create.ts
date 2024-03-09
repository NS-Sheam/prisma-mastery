import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const create = await prisma.user.create({
  //   data: {
  //     username: "user2",
  //     email: "user2@gmail.com",
  //     role: UserRole.user,
  //   },
  // });
  // console.log(create);
  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is bio...",
  //     userId: 1,
  //   },
  // });
  // console.log(createProfile);
  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "software engineering",
  //   },
  // });

  // console.log(createCategory);

  const createPost = await prisma.post.create({
    data: {
      title: "This is title 4",
      content: "this is content of the post 4",
      authorId: 1,
      postCategory: {
        create: [
          {
            categoryId: 2,
          },
          {
            categoryId: 3,
          },
          {
            categoryId: 4,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};

main();
