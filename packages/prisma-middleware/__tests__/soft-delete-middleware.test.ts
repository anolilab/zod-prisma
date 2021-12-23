import { PrismaClient } from "@prisma/client";

import applySoftDeleteMiddleware from "../src/soft-delete-middleware";

const prisma = new PrismaClient();

applySoftDeleteMiddleware(prisma);

it("should drop deleted records in many-to-many relationships", async () => {
    let user;

    user = await prisma.user.create({
        data: {},
    });

    await prisma.post.create({ data: { userId: user.id } });
    const post2 = await prisma.post.create({ data: { userId: user.id } });

    user = await prisma.user.findUnique({ where: { id: user.id }, include: { posts: true } });

    expect(user.posts).toHaveLength(2);

    await prisma.post.delete({ where: { id: post2.id } });

    user = await prisma.user.findUnique({ where: { id: user.id }, include: { posts: true } });

    expect(user.posts).toHaveLength(1);
});
