
import { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();
async function seedUsers() {
  const users = [];
  for (let i = 1; i <= 20; i++) {
    users.push({
      address: faker.finance.ethereumAddress(),
      userName: faker.name.fullName(),
      bio: faker.lorem.sentences(3),
      profileTokenId: faker.datatype.number({max:10000}).toString(),
      primaryFunction: faker.lorem.word(),
      twitter: faker.internet.userName(),
    });
  }
  await prisma.user.createMany({
    data: users,
  });
}

async function seedCrowdSales() {
    const crowdSales: Prisma.CrowdSaleCreateManyInput[] = [];
    const users = await prisma.user.findMany();
    for (let i = 1; i <= 20; i++) {
      crowdSales.push({
        title: faker.lorem.words(3),
        body: faker.lorem.paragraph(),
        info: `Information about crowd sale ${i}`,
        seeking: faker.datatype.number({max: 20000}).toString(),
        endingAt: new Date(Date.now() + 86400000 * i).toISOString(), // Ending in i days
        createdById: users[i-1].address,
      });
    }
    await prisma.crowdSale.createMany({
      data: crowdSales,
    });
  }

async function seedComments() {
  const comments: Prisma.CommentCreateManyInput[] = [];
  const users = await prisma.user.findMany();
  const crowdSales = await prisma.crowdSale.findMany();
  for (let i = 1; i <= 20; i++) {
    comments.push({
        body: faker.lorem.paragraph(),
        createdById: users[i-1].address,
        crowdSaleId: crowdSales[i-1].id,
      });
  }
  await prisma.comment.createMany({
    data: comments,
  });
}

async function seedCommentVotes() {
    const commentVotes: Prisma.CommentVoteCreateManyInput[] = [];
    const users = await prisma.user.findMany();
    const comments = await prisma.comment.findMany();
    const crowdSales = await prisma.crowdSale.findMany();
    for (let i = 1; i <= 20; i++) {
      commentVotes.push({
        value: i % 2 === 0 ? 1 : -1,
        //voter: { connect: { address: users[i-1].address } },
        voterId: users[i-1].address,
        //comment: { connect: { id: comments[i-1].id } },
        commentId: comments[i-1].id
      });
      commentVotes.push({
        value: i % 2 === 0 ? 1 : -1,
        //voter: { connect: { address: users[i-1].address } },
        voterId: users[i-1].address,
        //crowdSale: { connect: { id: crowdSales[i-1].id } },
        commentId: comments[i-1].id
      });
    }
    await prisma.commentVote.createMany({
      data: commentVotes,
    });
  }

async function main() {
  await seedUsers();
  await seedCrowdSales();
  await seedComments();
  await seedCommentVotes();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });