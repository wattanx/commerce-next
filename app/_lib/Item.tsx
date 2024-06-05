'use client';

import type { ItemResponse } from './types';
import { Link } from 'next-view-transitions';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export const Item = ({ item }: { item: ItemResponse }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeItemId = searchParams.get('activeItemId');

  const [active, setActive] = useState(item.id === activeItemId);

  useEffect(() => {
    setActive(false);
  }, [item.id]);

  const onClick = () => {
    setActive(true);
  };

  return (
    <Link
      href={`/items/${item.id}/`}
      className="flex min-w-56 flex-col gap-4 px-4 py-2"
      onClickCapture={onClick}
    >
      <div>
        <img
          className={active ? 'item-image' : ''}
          src={item.image_urls[0]}
          width="200"
        />
      </div>
      <p className={active ? 'item-name' : ''}>{item.name}</p>
      <p className={active ? 'item-price' : ''}>
        ¥{item.variations[0].regular_price}
      </p>
    </Link>
  );
};
