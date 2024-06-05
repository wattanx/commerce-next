import { stringifyQuery } from 'ufo';
import type { ItemResponse } from './types';

const BASE_URL = 'https://api.stores.dev';

type ItemsQueryParams = {
  ids?: string[];
  status?: 'shown' | 'hidden' | 'unlisted';
  in_stock?: boolean;
  only_preorder_sales?: boolean;
  keyword?: string;
  /** @default 10 */
  limit?: number;
  offset?: number;
};

export const getItems = async (
  query?: ItemsQueryParams,
): Promise<{ items: ItemResponse[] }> => {
  const res = await fetch(
    `${BASE_URL}/retail/202211/items${
      query ? `?${stringifyQuery(query)}` : ''
    }`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    },
  );
  return res.json();
};
