import { getItems } from '@/app/_lib/client';
import { Link } from 'next-view-transitions';

export default async function ItemDetail({
  params,
}: {
  params: { item_id: string };
}) {
  const { item_id } = params;
  const { items } = await getItems({ ids: [item_id] });

  const item = items[0];

  return (
    <main className="flex min-h-[calc(100vh-56px)] flex-col items-center pt-8">
      <div>
        <Link href={`/?activeItemId=${item_id}`}>back</Link>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <div key={item.id} className="flex min-w-56 flex-col gap-4 px-4 py-2">
          <div>
            <img className="item-image" src={item.image_urls[0]} width="400" />
          </div>
          <p className="item-name">{item.name}</p>
          <p className="item-price">¥{item.variations[0].regular_price}</p>
          <p>{item.description}</p>
        </div>
      </div>
    </main>
  );
}
