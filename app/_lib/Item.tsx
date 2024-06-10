'use client';

import type { ItemResponse } from './types';
import { Link } from 'next-view-transitions';
import { useRouter, useSearchParams } from 'next/navigation';

export const Item = ({ item }: { item: ItemResponse }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Link
      href={`/items/${item.id}/`}
      className="flex min-w-56 flex-col gap-4 px-4 py-2"
    >
      <div>
        <img
          style={{ viewTransitionName: `item-image-${item.id}` }}
          src={item.image_urls[0]}
          width="200"
        />
      </div>
      <p style={{ viewTransitionName: `item-name-${item.id}` }}>{item.name}</p>
      <p style={{ viewTransitionName: `item-price-${item.id}` }}>
        ¥{item.variations[0].regular_price}
      </p>
    </Link>
  );
};
