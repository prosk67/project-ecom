import { db } from './prisma';
import { faker } from '@faker-js/faker';



async function main() {
  console.log('🌱 Seeding database...');

  // Create Categories
  const categories = await Promise.all(
    ['Headphones', 'Speakers', 'Microphones', 'Accessories'].map(name =>
      db.category.create({
        data: { name },
      })
    )
  );

  // Create Products
  for (let i = 0; i < 10; i++) {
    await db.product.create({
      data: {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price()),
        stock: faker.number.int({ min: 1, max: 100 }),
        categoryId: faker.helpers.arrayElement(categories).id,
        images: {
          create: [{ url: faker.image.url() }],
        },
      },
    });
  }

  // Create Users
  const users = await Promise.all(
    [...Array(5)].map(() =>
      db.user.create({
        data: {
          name: faker.person.fullName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          role: 'USER',
        },
      })
    )
  );

  // Create Orders
  for (const user of users) {
    await db.order.create({
      data: {
        userId: user.id,
        totalAmount: faker.number.float({ min: 20, max: 500 }),
        status: 'PENDING',
      },
    });
  }

  console.log('✅ Database seeded successfully!');
}

main()
  .catch(e => console.error(e))
  .finally(() => db.$disconnect());
