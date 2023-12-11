const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
async function main() {
    const alice = await prisma.user.upsert({
        where: { email: 'alice@prisma.io' },
        update: {},
        create: {
            email: 'alice@example.com',
            name: 'Alice',
            username: "alice12",
            password: Math.random().toString()
        },
    })
    const bob = await prisma.user.upsert({
        where: { email: 'bobters@example.com' },
        update: {},
        create: {
            email: 'bob@prisma.io',
            name: 'Bob',
            username: 'bob122212',
            password: Math.random().toString()
        },
    })
    const first_blog = await prisma.blog.upsert({
        where: { id: 1 },
        update: {},
        create: {
            title: "test",
            content: "this is jus a dummy content nothing to see here"
        }
    })
    const firstComment = await prisma.comment.upsert({
        where: { id: 1 },
        update: {},
        create: {
            content: "this is just a comment nothing to see here",
            Blog: {
                connect: {
                    id: 1
                }
            },
            User: {
                connect: {
                    id: 1
                }
            }
        }
    })
    console.table({ alice, bob, first_blog, firstComment })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })