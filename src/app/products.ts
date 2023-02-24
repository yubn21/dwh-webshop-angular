export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'SimCorp Logo Backpack',
    price: 299,
    description: 'A nice, blue backpack with SimCorp Logo'
  },
  {
    id: 2,
    name: 'SimCorp Logo Powerbank',
    price: 160,
    description: 'A powerbank with SimCorp Logo'
  },
  {
    id: 3,
    name: 'SimCorp Logo Mug',
    price: 28,
    description: 'A white mug with SimCorp Logo'
  },
  {
    id: 4,
    name: 'SimCorp Logo Unmbrella',
    price: 45,
    description: 'A black umbrella with SimCorp Logo'
  }
];
