import { db } from "@/server/db";

export const dynamic = "force-dynamic";

const images = [
  "https://utfs.io/f/207b4761-0de8-4e9b-b66d-1b06367d69a5-1xei68.JPG",
  "https://utfs.io/f/25221642-4d29-4d9c-9304-a6b9a8362336-arhb0w.51.51.jpg",
  "https://utfs.io/f/459be6b2-c82a-4c2e-9b59-6ed04478464c-v8utbe.jpg",
  "https://utfs.io/f/554be2bd-192f-4c30-a3cc-57da263498c5-1xehkp.JPG",
  "https://utfs.io/f/79a1e18f-fadd-49b1-90ce-ee296152649d-f04rk4.webp",
  "https://utfs.io/f/11962448-74b7-4cfa-b1b0-ddc2a1f4b6ac-k455zb.jpg",
  "https://utfs.io/f/2e6c15f4-46c1-4a81-8567-ddc31699a78c-mq5f7l.jpeg",
  "https://utfs.io/f/7a1dcf12-26de-4c3f-8e86-10dae2f2fc38-4fdhty.png",
  "https://utfs.io/f/bfa4892f-f31d-46c5-a375-b5bc122ed222-mxb5sh.jpg",
  "https://utfs.io/f/42326f93-ebdd-45c1-81f9-e687b14ed13a-z3xod4.jpg",
  "https://utfs.io/f/6880feae-bf09-451b-8bc0-b6c63ddaa671-z3xod8.jpg",
];

const mockedData = [...images, ...images, ...images, ...images, ...images, ...images].map(
  (url, index) => ({
    id: index + 1,
    src: url,
    title: `Image ${index + 1}`,
  }),
);

export default async function Home() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map(post => (
          <div key={post.id} className="w-64">
            <h1>{post.name}</h1>
          </div>
        ))}
        {mockedData.map(item => (
          <div key={item.id} className="w-64">
            {/* <Image src={item.src} alt={item.title} width={300} height={150} layout="responsive" /> */}
            <img src={item.src} className="h-40 w-96 rounded-lg object-cover" />
          </div>
        ))}
      </div>
    </main>
  );
}
