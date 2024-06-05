import { getItems } from './_lib/client';
import { Item } from './_lib/Item';

export default async function Home() {
  const { items } = await getItems({ limit: 3, status: 'shown' });

  const variations = items.flatMap((item) => item.variations);

  return (
    <main className="flex min-h-[calc(100vh-56px)] flex-col items-center pt-8">
      <h1 className="text-4xl font-bold">ふしぎないらすとや</h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}
