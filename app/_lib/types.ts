export type ItemResponse = {
  id: string;
  name: string;
  created_at: string;
  status: 'shown' | 'hidden' | 'unlisted';
  image_urls: string[];
  limited_quantity: number;
  description: string;
  reduced_tax: boolean;
  type: 'regular' | 'ticket' | 'subscription' | 'digital_content';
  variations: Variation[];
};

export type Variation = {
  id: string;
  name: string;
  quantity: number | null;
  code: string | null;
  barcode: string | null;
  sales_price: number;
  regular_price: number;
  discount_amount: number;
  discount_rate: number;
};
