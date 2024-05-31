import { db } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function Home() {
  const imagesFetched = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  const images = [...imagesFetched, ...imagesFetched, ...imagesFetched, ...imagesFetched];

  console.log(images);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="flex w-64 flex-col gap-4 rounded-2xl bg-slate-800 p-2"
          >
            <img src={image.url} className="h-40 w-96 rounded-lg object-cover shadow-lg" />
            <div className="font-sans text-sm font-semibold text-slate-400">{image.title}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
