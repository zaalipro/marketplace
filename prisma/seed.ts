import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create test user
  const user = await prisma.user.create({
    data: {
      name: 'Test User',
      email: 'test@example.com',
      password: 'hashedpassword',
    },
  })

  // Create test listings
  await prisma.listing.createMany({
    data: [
      {
        title: 'MacBook Pro 16"',
        description: 'Like new MacBook Pro with M1 Pro chip',
        price: 1899.99,
        category: 'electronics',
        condition: 'excellent',
        images: ['https://example.com/macbook.jpg'],
        userId: user.id,
      },
      {
        title: 'Nike Air Max 97',
        description: 'Size 9.5 Nike Air Max 97 in great condition',
        price: 150.00,
        category: 'fashion',
        condition: 'good',
        images: ['https://example.com/nike.jpg'],
        userId: user.id,
      },
      {
        title: 'Leather Sofa',
        description: 'Modern leather sofa for living room',
        price: 799.99,
        category: 'home',
        condition: 'excellent',
        images: ['https://example.com/sofa.jpg'],
        userId: user.id,
      },
    ],
  })

  console.log('Seeding completed')
}

await main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
